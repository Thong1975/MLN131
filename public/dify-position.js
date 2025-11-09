// Script để điều chỉnh vị trí cửa sổ chat theo vị trí click
(function() {
  let clickPosition = null;
  let isWindowOpening = false;
  let positionAdjusted = false;
  let adjustmentAttempts = 0;
  let positionMonitorInterval = null;
  const maxAttempts = 20; // Tối đa 2 giây (20 * 100ms)
  const monitorDuration = 3000; // Giám sát trong 3 giây sau khi mở
  
  // Hàm để lấy vị trí click trên bubble button
  function setupClickTracker() {
    // Đợi cho đến khi bubble button được tạo (có thể mất thời gian vì script defer)
    const checkButton = setInterval(function() {
      const button = document.getElementById('dify-chatbot-bubble-button');
      if (button) {
        clearInterval(checkButton);
        
        // Lắng nghe sự kiện click trên button
        button.addEventListener('click', function(e) {
          // Lưu vị trí click (tọa độ màn hình)
          clickPosition = {
            x: e.clientX,
            y: e.clientY
          };
          
          // Reset các biến trạng thái
          isWindowOpening = true;
          positionAdjusted = false;
          adjustmentAttempts = 0;
          
          // Bắt đầu cố gắng điều chỉnh vị trí
          attemptAdjustPosition();
        }, true); // Sử dụng capture phase để bắt sớm hơn
      }
    }, 200);
  }
  
  // Hàm để cố gắng điều chỉnh vị trí (thử lại nhiều lần)
  function attemptAdjustPosition() {
    if (!isWindowOpening || positionAdjusted) return;
    
    adjustmentAttempts++;
    const chatWindow = document.getElementById('dify-chatbot-bubble-window');
    
    if (chatWindow && clickPosition) {
      // Kiểm tra xem cửa sổ có đang hiển thị không
      const computedStyle = window.getComputedStyle(chatWindow);
      const isVisible = computedStyle.display !== 'none' && 
                       computedStyle.visibility !== 'hidden' &&
                       computedStyle.opacity !== '0';
      
      if (isVisible) {
        adjustWindowPosition(chatWindow);
        positionAdjusted = true;
        // Bắt đầu giám sát để đảm bảo vị trí được duy trì
        startPositionMonitor(chatWindow);
        return;
      }
    }
    
    // Tiếp tục thử nếu chưa đạt max attempts
    if (adjustmentAttempts < maxAttempts) {
      setTimeout(attemptAdjustPosition, 100);
    } else {
      // Reset nếu không thành công
      isWindowOpening = false;
    }
  }
  
  // Hàm để điều chỉnh vị trí cửa sổ chat
  function adjustWindowPosition(windowElement) {
    if (!windowElement || !clickPosition) return;
    
    // Tính toán vị trí mới
    const windowWidth = 384; // 24rem = 384px
    const windowHeight = 640; // 40rem = 640px
    const padding = 20;
    const buttonOffset = 70; // Khoảng cách từ button
    
    // Mặc định: hiển thị phía trên nút, căn giữa theo chiều ngang
    let left = clickPosition.x - windowWidth / 2;
    let top = clickPosition.y - windowHeight - buttonOffset;
    
    // Điều chỉnh nếu vượt quá biên trái
    if (left < padding) {
      left = padding;
    }
    // Điều chỉnh nếu vượt quá biên phải
    if (left + windowWidth > window.innerWidth - padding) {
      left = window.innerWidth - windowWidth - padding;
    }
    // Điều chỉnh nếu vượt quá biên trên - hiển thị bên dưới thay vào đó
    if (top < padding) {
      top = clickPosition.y + buttonOffset;
    }
    // Điều chỉnh nếu vượt quá biên dưới
    if (top + windowHeight > window.innerHeight - padding) {
      top = Math.max(padding, window.innerHeight - windowHeight - padding);
    }
    
    // Áp dụng vị trí mới với !important thông qua setProperty
    windowElement.style.setProperty('left', left + 'px', 'important');
    windowElement.style.setProperty('top', top + 'px', 'important');
    windowElement.style.setProperty('right', 'auto', 'important');
    windowElement.style.setProperty('bottom', 'auto', 'important');
    windowElement.style.setProperty('transform', 'none', 'important');
    windowElement.style.setProperty('position', 'fixed', 'important');
  }
  
  // Hàm để giám sát và duy trì vị trí cửa sổ
  function startPositionMonitor(windowElement) {
    // Dừng monitor cũ nếu có
    if (positionMonitorInterval) {
      clearInterval(positionMonitorInterval);
    }
    
    const startTime = Date.now();
    let lastLeft = null;
    let lastTop = null;
    
    // Giám sát trong một khoảng thời gian
    positionMonitorInterval = setInterval(function() {
      // Kiểm tra xem cửa sổ còn tồn tại và đang mở không
      const chatWindow = document.getElementById('dify-chatbot-bubble-window');
      if (!chatWindow) {
        clearInterval(positionMonitorInterval);
        positionMonitorInterval = null;
        return;
      }
      
      const computedStyle = window.getComputedStyle(chatWindow);
      const isVisible = computedStyle.display !== 'none' && 
                       computedStyle.visibility !== 'hidden' &&
                       computedStyle.opacity !== '0';
      
      if (!isVisible) {
        clearInterval(positionMonitorInterval);
        positionMonitorInterval = null;
        return;
      }
      
      // Kiểm tra xem đã hết thời gian giám sát chưa
      if (Date.now() - startTime > monitorDuration) {
        clearInterval(positionMonitorInterval);
        positionMonitorInterval = null;
        return;
      }
      
      // Lấy vị trí hiện tại
      const currentLeft = computedStyle.left;
      const currentTop = computedStyle.top;
      
      // Điều chỉnh lại nếu vị trí bị thay đổi (so sánh với lần kiểm tra trước)
      if (clickPosition && lastLeft !== null && lastTop !== null) {
        // Nếu vị trí thay đổi đáng kể (hơn 10px), điều chỉnh lại
        const leftDiff = Math.abs(parseFloat(currentLeft) - parseFloat(lastLeft));
        const topDiff = Math.abs(parseFloat(currentTop) - parseFloat(lastTop));
        
        if (leftDiff > 10 || topDiff > 10) {
          adjustWindowPosition(chatWindow);
        }
      }
      
      lastLeft = currentLeft;
      lastTop = currentTop;
    }, 200); // Kiểm tra mỗi 200ms
  }
  
  // Sử dụng MutationObserver để theo dõi khi cửa sổ chat được tạo hoặc thay đổi
  function setupWindowObserver() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // Kiểm tra các node mới được thêm vào
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) {
              const chatWindow = node.id === 'dify-chatbot-bubble-window' 
                ? node 
                : (node.querySelector && node.querySelector('#dify-chatbot-bubble-window'));
              
              if (chatWindow && isWindowOpening && clickPosition && !positionAdjusted) {
                setTimeout(function() {
                  attemptAdjustPosition();
                }, 50);
              }
            }
          });
        }
        
        // Kiểm tra thay đổi attribute (như style, class)
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
          const target = mutation.target;
          if (target.id === 'dify-chatbot-bubble-window' && 
              isWindowOpening && 
              clickPosition && 
              !positionAdjusted) {
            setTimeout(function() {
              attemptAdjustPosition();
            }, 50);
          }
        }
      });
    });
    
    // Bắt đầu quan sát body và document
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  }
  
  // Khởi tạo khi DOM đã sẵn sàng
  function init() {
    setupClickTracker();
    setupWindowObserver();
  }
  
  // Đợi script Dify load xong (có thể mất thời gian)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Đợi thêm một chút để Dify script có thể load
      setTimeout(init, 500);
    });
  } else {
    setTimeout(init, 500);
  }
  
  // Cũng thử init sau khi window load hoàn toàn
  window.addEventListener('load', function() {
    setTimeout(init, 1000);
  });
})();

