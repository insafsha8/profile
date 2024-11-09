<script>
    let currentSection = 'profile';
  
    const sections = [
      { id: 'profile', label: 'Profile' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Education' }
    ];
  
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      currentSection = id;
    }
  
    // Change active link on scroll
    function onScroll() {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = section.id;
        }
      });
    }
  </script>
  
  <nav class="fixed top-0 w-full bg-white shadow-md p-4 z-50" on:scroll={onScroll}>
    <ul class="flex justify-center space-x-6">
      {#each sections as { id, label }}
        <li class="cursor-pointer">
          <a 
            on:click={() => scrollToSection(id)}
            class:text-primary={currentSection === id}
            class="text-gray-600 hover:text-primary transition-colors">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  