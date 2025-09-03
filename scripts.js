// script.js

// Main tabs functionality
const tabs = document.querySelectorAll('.tabs button');
const cardsSection = document.querySelector('.cards');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Filter cards (optional)
    const tabName = tab.textContent.toLowerCase();
    const cards = cardsSection.querySelectorAll('.card');

    cards.forEach(card => {
      if (tabName === 'all' || card.querySelector('h3').textContent.toLowerCase().includes(tabName)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});



// Learn tabs functionality
const learnTabs = document.querySelectorAll('.learn-tabs button');
const learnCards = document.querySelectorAll('.learn-card');

learnTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all learn tabs
    learnTabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Filter learn cards based on tab (optional)
    const tabName = tab.textContent.toLowerCase();

    learnCards.forEach(card => {
      const text = card.querySelector('p').textContent.toLowerCase();
      if (tabName === 'all' || text.includes(tabName)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Quick actions buttons click (optional: highlight selected)
const quickButtons = document.querySelectorAll('.quick-actions button');
quickButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    quickButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // You can add filtering functionality here
  });
});

// Topbar search functionality (optional)
const searchInput = document.querySelector('.topbar input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const cards = cardsSection.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(query) || desc.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

