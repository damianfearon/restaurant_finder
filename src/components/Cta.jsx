import React from 'react'

export default function Navigation() {
   return (
    // !-- CTA Section -->
    <section id="cta" class="bg-regal-blue">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        {/* <!-- Heading --> */}
        <h2
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Eat With us Today!
        </h2>
        <div class="my-16">
          <button
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >I'm feeling Hungry </button>
        </div>
      </div>
    </section>
    )
   
}
