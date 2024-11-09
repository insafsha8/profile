<script>
    export let name;
    export let title;
    export let email;
    export let phone;
    export let imageUrl;
    import resume from '../assets/Insaf_Resume.pdf'
  </script>
  
  <div class="flex flex-col items-center text-center bg-glass shadow-glass backdrop-blur-md p-6 rounded-lg space-y-4">
    <img src={imageUrl} alt="Profile Photo" class="w-40 h-40 rounded-full shadow-lg border-4 border-primary transform transition-transform hover:scale-110" />
    <h1 class="text-4xl font-bold text-primary">{name}</h1>
    <p class="text-lg text-gray-600">{title}</p>
    <div class="text-lg text-gray-600">
        <p class="text-lg text-gray-600">{email}</p>
        <p class="text-lg text-gray-600">{phone}</p>
    </div>
    
    <!-- Download Resume Button -->
    <a href={resume} download class="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-light transition-colors">
      Download Resume
    </a>
  </div>
  
  