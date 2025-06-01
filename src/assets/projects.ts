export const projects = [
  {
    id: 1,
    image: '/images/projects/nostra.webp',
    techImage: '/images/technologies/nextjs.svg',
    title: 'Nostra-Pizza',
    description:
      "A full-stack application for food ordering with Google authentication and order confirmations via email. Users can browse products, with some offering additional options like extra portions of meat. Orders are placed through a form that includes a phone number input mask and a Google address input for delivery. Regular users can view their order history, while admins have access to a dedicated admin panel to manage products and orders. Orders are sent to the owner's Gmail. MongoDB stores all products and orders from authenticated users. The app is responsive, supports various devices, and allows users to save products to their favorites. Images are stored and managed using Cloudinary.",
    techstack:
      'Next.js, TypeScript, Redux-Toolkit, React Hook Form, MongoDB, Google Maps, Google OAuth, Vercel, Cloudinary',
    role: 'Full-Stack Developer & Product Creator',
    liveUrl: 'https://nostrra-pizzza.vercel.app',
    githubUrl: 'https://github.com/Yevhenns/pizza-app-router.git',
  },
  {
    id: 2,
    image: '/images/projects/evently.webp',
    techImage: '/images/technologies/react.svg',
    title: 'Book my event',
    description:
      'I integrated RTK Query with optimistic updates for likes, enabling a smoother user experience. I also implemented the Google Maps API and performed unit testing to ensure robust functionality. On the /all_events page, I developed advanced filters, improving event search and categorization. I created a form for the /user_profile page, enhancing user profile management. In addition, I resolved multiple bugs, ensuring the application runs seamlessly. I addressed design inconsistencies, aligning the implementation with Figma prototypes to improve visual consistency. I also provided ongoing support to other developers, assisting with technical challenges and code review.',
    techstack: 'React, TypeScript, Redux-Toolkit, RTK-Query, Vitest, Figma, Jira',
    role: 'Front-End Developer',
    liveUrl: 'https://evently-book.vercel.app',
    githubUrl: 'https://github.com/McLareni/evently_front.git',
  },
  {
    id: 3,
    image: '/images/projects/calendar.webp',
    techImage: '/images/technologies/react.svg',
    title: 'React DayPicker',
    description:
      'I developed a custom calendar component for this project, which includes a single date picker and a date range picker. The package uses Day.js for date manipulation and pure CSS for styling. The goal was to provide a lightweight, flexible solution tailored to project needs. I ensured proper keyboard accessibility and responsive behavior. The calendar supports custom theming and localization. It was built from scratch and published as a reusable npm package for use in other apps.',
    techstack: 'React, TypeScript, CSS Modules, Day.js',
    role: 'Front-End Developer & Package Author',
    liveUrl: 'https://www.npmjs.com/package/bme-calendar',
    githubUrl: 'https://github.com/Yevhenns/bme-calendar.git',
  },
  {
    id: 3,
    image: '/images/projects/nostra-mobile.webp',
    techImage: '/images/technologies/react.svg',
    title: 'Nostra-Pizza',
    description:
      "Mobile application for Nostra Pizza with Google authentication and order confirmations via email. Users can browse products, some with additional options like extra portions of meat. Orders are placed through a form that includes a phone number input mask and Google address input for delivery. Regular users can view their order history, while admins have access to a dedicated admin panel. Orders are sent to the owner's Gmail account. All products and orders from authenticated users are stored in MongoDB. The app is responsive, supports multiple devices, and allows users to save products to their favorites list.",
    techstack: 'React-Native, TypeScript, Redux-Toolkit, React Hook Form, Google Maps, OAuth',
    role: 'Front-End Developer & Product Creator',
    liveUrl: null,
    githubUrl: 'https://github.com/Yevhenns/pizza_mob.git',
  },
  {
    id: 4,
    image: '/images/projects/novaposhta.webp',
    techImage: '/images/technologies/vue.svg',
    title: 'Novaposhta tracker',
    description:
      'Google Chrome extension for tracking parcels. Users can search for parcels by tracking number and receive additional information by entering a phone number. The extension also provides a list of tracked parcels, allowing users to update the status of each one. In the settings, users can add their own API key for personalized tracking.',
    techstack: 'Vue3, TypeScript, Pinia, Vue-Router, Vercel',
    role: 'Front-End Developer & Product Creator',
    liveUrl: 'https://np-extension.vercel.app/',
    githubUrl: 'https://github.com/Yevhenns/np-extension.git',
  },
  {
    id: 5,
    image: '/images/projects/nostra-back.webp',
    techImage: '/images/technologies/nestjs.svg',
    title: 'Nostra Pizza',
    description:
      "Backend for Nostra Pizza with email order confirmations. Orders are sent to the owner's Gmail account. MongoDB stores products and orders from authenticated users. The backend is documented with Swagger for easy API interaction. It’s optimized for scalability and performance, supporting multiple devices and ensuring smooth operation for both users and administrators.",
    techstack: 'Nest.js, TypeScript, MongoDB, Nodemailer, Swagger, Render',
    role: 'Back-End Developer & Product Creator',
    liveUrl: 'https://pizza-nest.onrender.com/api',
    githubUrl: 'https://github.com/Yevhenns/pizza-nest.git',
  },
]
