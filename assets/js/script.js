// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const content = document.getElementById('content');
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');
  const popupDescription = document.getElementById('popupDescription');
  const popupLink = document.getElementById('popupLink');
  const closeBtn = document.querySelector('.close-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const bottomBarLinks = document.querySelectorAll('.bottom-bar a');
  const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
  const sidebar = document.querySelector('.sidebar');

  // Sample data (replace with actual data or API calls)
  const data = {
    manga: [
      { title: "One Piece", img: "/assets/manga-img/One Piece.jpg", description: "Gol D. Roger, a man referred to as the Pirate King, is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas. [Written by MAL Rewrite]", link: "https://mangareader.to/one-piece-3" },
      { title: "Vinland Saga", img: "/assets/manga-img/Vinland Saga.jpg", description: "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel. Not yet skilled enough to defeat him, but unable to abandon his vengeance, Thorfinn spends his boyhood with the mercenary crew, honing his skills on the battlefield among the war-loving Danes, where killing is just another pleasure of life. One day, when Askeladd receives word that Danish prince Canute has been taken hostage, he hatches an ambitious plot—one that will decide the next King of England and drastically alter the lives of Thorfinn, Canute, and himself. Set in 11th century Europe, tells a bloody epic in an era where violence, madness, and injustice are inescapable, providing a paradise for the battle-crazed and utter hell for the rest who live in it. [Written by MAL Rewrite]", link: "https://mangareader.to/vinland-saga-14" }
        ],
    manhua: [
      { title: "Moon Slayer", img: "/assets/manhua-img/Moon Slayer.jpg", description: "After transforming into the world boss, I hide among the players, searching for the secrets of the game world. As the sole true king, I am determined to go to any lengths to change this world. Guilds? Players? Bosses? They are all just stepping stones for me to achieve my goals. Everything brought by <Illusionary Moon> will be severed by me. On the opening day of <Illusionary Moon>, I realised that I had many more items in my inventory as compared to other players. One Shura Secret Codex, an Achievement Manual and also a really mysterious bracelet. I didn’t know who gave me all these, I also didn’t know what triggered the system bug. The only thing I knew was that this was the beginning! The world will tremble because of me, the mountains and rivers will awaken for me. 700 million girls will be attracted to me, because I might really be the strongest character in this world!", link: "https://drake-scans.com/manga/moon-slayer/" },
      { title: "Magic Emperor", img: "/assets/manhua-img/Magic Emperor.jpg", description: "Because he had the heritage of the ancient Magic Emperor, Magic Emperor Zhuo Yifan met the misfortune of being betrayed and killed by his trusted disciple. After being reborn, his cultivation went back to zero and he was trapped by a heart demon, given no choice but to become the housekeeper of the Luo Family’s lone eldest miss. From being a Magic Emperor to being an insignificant housekeeper, how would he get along with his “heart demon eldest miss” and what power would he gain in order to lead himself and the declining family to rise back to the peak of the continent!", link: "https://1st-kissmanga.net/manga/magic-emperor/" }
        ],
    manhwa: [
      { title: "My Girlfriend Is A Zombie", img: "/assets/manhwa-img/My Girlfriend Is A Zombie.jpg", description: "The special power inside Ling Mo was awakened in the face of the doomsday. He found out he could control the zombies. He could therefore walk through the zombie crowd safe and sound with his power, and eventually he met his beloved girlfriend-Ye Lian, but only to find out that she had already been transformed into a zombie. In order to help Ye retrieve her memories, Ling Mo began to survive on the doomsday. My Girlfriend Is A Zombie. Ling Mo began his doomsday survival to help Ye recede her memories. He learned he could handle zombies. Then, using his strength, he was able to walk safely and sound through the zombie crowd and finally met his beloved girlfriend-Ye Lian, but only to find out she’s already turned into a zombie.", link: "https://mangareader.to/my-girlfriend-is-a-zombie-58628" },
      { title: "My Secret Roommate", img: "/assets/manhwa-img/My Secret Roommate.jpg", description: "Sooha, who’d licked her lazily like a languid predator, tilted his head and tried to kiss her. Hyemin leaned her upper body back as much as possible. Sweat traveled down her spine. As he continued, sounds she heard outside made her nervous. They can’t get caught. Never, at least for the sake of her life’s peace and serenity! “A-At home.” She bit her lips and whispered seriously, as if trying to negotiate. At that, his languid eyes briefly lit up. “Home?” “Yeah! I’ll discharge you from the hospital. So at home…” “Let’s continue?” Irritated, she pushed his shoulder. But in the end, she couldn’t slip out. “No.” He, who kissed her glistening lips repeatedly, smirked and placed his body over hers again. “I don’t want to. I can’t wait, Honey.” Song Hyemin is a fourth-year resident at Songlim University Hospital, facing the worst crisis of her life thanks to A-list celebrity Lee Sooha, who suddenly visited her. My secretive and dizzying roommate story, as hazy as it is lovely.", link: "https://freemangatop.com/manga/my-secret-roommate/" }
        ]
  };

  // Function to render content based on category
  function renderContent(category) {
    content.innerHTML = ''; // Clear previous content
    data[category].forEach(item => {
      const box = document.createElement('div');
      box.classList.add('box');
      box.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
      box.addEventListener('click', () => {
        popupImage.src = item.img;
        popupTitle.textContent = item.title;
        popupDescription.textContent = item.description;
        popupLink.href = item.link;
        popup.style.display = 'flex';
      });
      content.appendChild(box);
    });
  }

  // Event listeners for sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      highlightActiveLink(category);
      renderContent(category);
      toggleSidebar(); // Close sidebar on link click (for mobile)
    });
  });

  // Event listeners for bottom bar links
  bottomBarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      highlightActiveLink(category);
      renderContent(category);
    });
  });

  // Function to highlight active link
  function highlightActiveLink(category) {
    document.querySelector('.sidebar a.active')?.classList.remove('active');
    document.querySelector('.bottom-bar a.active')?.classList.remove('active');
    sidebarLinks.forEach(link => {
      if (link.dataset.category === category) {
        link.classList.add('active');
      }
    });
    bottomBarLinks.forEach(link => {
      if (link.dataset.category === category) {
        link.classList.add('active');
      }
    });
  }

  // Search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    document.querySelectorAll('.box').forEach(box => {
      const title = box.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });

  // Close popup
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Toggle sidebar
  function toggleSidebar() {
    sidebar.classList.toggle('show');
  }

  toggleSidebarBtn.addEventListener('click', function() {
    toggleSidebar();
  });

  // Close sidebar when clicking outside (on mobile)
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && !toggleSidebarBtn.contains(e.target)) {
      sidebar.classList.remove('show');
    }
  });

  // Initial render (default category)
  renderContent('manga');
});
