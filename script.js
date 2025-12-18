const timelineItems = document.querySelectorAll('.timeline-item');
const activePopups = {}; // track popups by timeline index
let topZIndex = 100;

timelineItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const text = item.dataset.text;
    const img = item.dataset.img;

    // Toggle popup for same item
    if (activePopups[index]) {
      activePopups[index].remove();
      delete activePopups[index];
      return;
    }

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => {
      popup.remove();
      delete activePopups[index];
    };

    // Image
    const image = document.createElement('img');
    image.src = img;
    image.draggable = false;

    // Text
    const popupText = document.createElement('div');
    popupText.className = 'popup-text';
    popupText.innerHTML = text;

    // Assemble popup
    popup.appendChild(closeBtn);
    popup.appendChild(image);
    popup.appendChild(popupText);
    document.body.appendChild(popup);

    // Center popup initially
    popup.style.left = `${window.innerWidth / 2 - popup.offsetWidth / 2}px`;
    popup.style.top = `${window.innerHeight / 2 - popup.offsetHeight / 2}px`;

    // Store popup
    activePopups[index] = popup;

    // Drag logic
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    popup.addEventListener('mousedown', (e) => {
      if (e.target === closeBtn) return;
      isDragging = true;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
      popup.style.zIndex = Date.now(); // bring to front
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
});
