<script>
    import Profile from './components/Profile.svelte';
    import Experience from './components/Experience.svelte';
    import profImage from './assets/prof.jpg'
  
    import { fade, fly } from 'svelte/transition';
  
    const profileData = {
      name: "INSAF SHA",
      title: "Senior Executive - Finance & Accounts",
      email: "insafsha8@gmail.com",
      phone: "+91 9037151780",
      imageUrl: profImage
    };
  
    const experiences = [
      {
        company: "Aster DM Healthcare",
        position: "Senior Executive - Finance & Accounts",
        duration: "June 2014 - Feb 2020 (Dubai), Dec 2023 - Oct 2024 (India)",
        responsibilities: [
          "Managed capital work-in-progress schedules and capitalization planning",
          "Conducted monthly related party & intercompany reconciliations",
          "Prepared quarterly variance analysis for P&L and Balance Sheet reports",
          "Coordinated with auditors and provided necessary documentation",
          "Supervised daily credit card reconciliations for multiple pharmacy locations",
          "Generated comprehensive daily and monthly sales reports for management"
        ]
      },
      {
        company: "NASCO Emirates Insurance Brokers",
        position: "Senior Associate - Finance & Accounts",
        duration: "Feb 2020 - June 2022 (Abu Dhabi)",
        responsibilities: [
          "Managed accounts receivable and payable",
          "Conducted vendor and customer reconciliations",
          "Performed monthly bank reconciliations",
          "Supported audit processes and account closings",
          "Monitored real-time premium/commission receipts"
        ]
      }
    ];
  </script>
  
  <div class="bg-gradient-to-b from-blue-200 to-blue-600 min-h-screen text-gray-900 font-sans space-y-8 p-6 md:p-12">
    <section id="profile" class="mb-12" in:fade={{ duration: 1000 }}>
      <Profile {...profileData} />
    </section>
  
    <section id="experience" class="space-y-8">
      <h2 class="text-3xl font-bold text-white text-center">Professional Experience</h2>
      {#each experiences as experience, i}
        <div in:fly={{ x: i % 2 === 0 ? -200 : 200, duration: 800, delay: i * 150 }}>
          <Experience {...experience} />
        </div>
      {/each}
    </section>
  </div>
<style>
:global(body) {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to bottom right, #1a73e8, #ff5722);
  margin: 0;
  scroll-behavior: smooth;
}

.shadow-glass {
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

</style>  