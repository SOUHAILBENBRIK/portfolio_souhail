<template>
  <footer
    class="divide-y bg-gradient-to-t from-base-800 from-95% to-transparent px-4 text-gray-100"
  >
    <div
      class="content mx-auto flex flex-col justify-between space-y-8 py-5 pt-16 lg:flex-row lg:space-y-0"
    >
      <div class="lg:w-1/3">
        <div class="flex items-center space-x-2">
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                stroke-dasharray="48"
                stroke-dashoffset="48"
                d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <path
                stroke-dasharray="14"
                stroke-dashoffset="14"
                d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="14;28"
                />
              </path>
            </g>
            <mask id="lineMdCoffeeTwotoneLoop0">
              <path
                fill="none"
                stroke="#fff"
                stroke-width="2"
                d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
              >
                <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" />
              </path>
            </mask>
            <rect
              width="24"
              height="0"
              y="7"
              fill="currentColor"
              mask="url(#lineMdCoffeeTwotoneLoop0)"
            >
              <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" />
              <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" />
            </rect>
          </svg>
          <h1 class="self-center text-2xl font-semibold">Souhail Ben Brik</h1>
        </div>
        <!-- Leave one attribution, delete the other -->

        <span class="text-sm">
          Thank you for visiting my portfolio.
          <br />Here are some useful links:
        </span>
        <br />
        <span name="attribution 1" class="text-xs text-gray-400"
          >Made By
          <a href="https://github.com/SOUHAILBENBRIK/portfolio_souhail" target="_blank">Souhail Ben Brik</a></span
        >
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
        <div class="space-y-3">
          <h2 class="uppercase">Navigation</h2>
          <ul class="space-y-1">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/#experience">Experience</RouterLink>
            </li>
            <li>
              <RouterLink to="/#projects">Projects</RouterLink>
            </li>
            <li>
              <RouterLink to="/#about">About</RouterLink>
            </li>
          </ul>
        </div>
       
       
        <div class="space-y-3">
          <h2 class="uppercase">Social media</h2>
          <div class="flex justify-start space-x-3">
            <a rel="noopener noreferrer" href="https://www.facebook.com/souhail.benbrik.7" target="_blank" title="Facebook" class="flex items-center p-1">
              <FacebookIcon class="h-5 w-5" />
            </a>
            <a rel="noopener noreferrer" href="https://www.youtube.com/@codegleam" target="_blank" title="Youtube" class="flex items-center p-1">
              <YoutubeIcon class="h-5 w-5" />
            </a>
            <a rel="noopener noreferrer" href="https://github.com/SOUHAILBENBRIK" target="_blank" title="Github" class="flex items-center p-1">
              <GithubIcon class="h-5 w-5" />
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/souhail-ben-brik/" target="_blank" title="Linkedin" class="flex items-center p-1">
              <LinkedinIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3 text-center text-sm">© 2025 Souhail Ben Brik.</div>
  </footer>
</template>

<script setup lang="ts">
import FacebookIcon from './icons/FacebookIcon.vue'
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import YoutubeIcon from './icons/YoutubeIcon.vue';
</script>
