import React from "react";
import Image from "next/image";
import {
  MemojiAvatar1,
  MemojiAvatar2,
  MemojiAvatar3,
  MemojiAvatar4,
  MemojiAvatar5,
} from "@/assets/images";
import { SectionHeader, Card } from "@/components";

const testimonials = [
  {
    name: "Chan Dela Peña",
    position: "Engineering Manager & Data Custodian | Premise",
    text: "I had the pleasure of mentoring Gab during his time in the Xpay/Premise Cadet Developer Program, and I’m thoroughly impressed by his growth, dedication, and technical skills. He consistently demonstrated strong problem-solving abilities, a proactive learning attitude, and an eagerness to take on new challenges. Whether tackling complex coding tasks or collaborating with peers, Gab always brought a positive attitude and a sharp analytical mind to the table.I have no doubt that Gab will continue to excel in his career and make meaningful contributions to any team. I highly recommend him for any future opportunities.",
    avatar: MemojiAvatar1,
  },
  {
    name: "Juvy Obrero",
    position: "E-Commerce Officer | Meatworld International Inc.",
    text: "It was a pleasure working with Gab during his internship at Meatworld International Inc. He took charge of backend database operations and Odoo.sh testing, quickly becoming a valuable member of our team. Gab also made a big impact on the frontend by integrating Meta Pixel and enhancing the Odoo UI, which noticeably improved our website's performance. His proactive approach to troubleshooting and customer support was impressive, and the onboarding documentation he created for future interns has already proven to be a valuable resource. I have no doubt Gab will continue to achieve great things in his career.",
    avatar: MemojiAvatar2,
  },
  {
    name: "Georgie Recabo",
    position: "Fullstack Developer | iCargo",
    text: "Gab made a real impact during his internship at iCargo as a fullstack developer. He worked on both the backend, using Laravel API for development and integration, and the frontend, where he utilized React and React Prime to create a smooth and responsive interface. Gab also played a key role in refining the UI design and implementing frontend logic, which significantly improved the user experience. His enthusiasm for learning and commitment to delivering quality work stood out throughout the internship. I am confident that Gab has a bright future ahead of him.",
    avatar: MemojiAvatar3,
  },
  {
    name: "Marice Sol Cruz-Camillo",
    position: "Student | TUP Taguig",
    text: "Gab was an excellent mentor when he taught me about the MERN stack. He not only provided clear and detailed explanations but also created helpful video tutorials and coding examples that made the learning process much smoother. His approach to teaching was hands-on, breaking down complex concepts into manageable steps. Thanks to his guidance, I gained a solid understanding of the MERN stack and felt much more confident in my coding skills. I am grateful for his support and highly recommend him as a mentor.",
    avatar: MemojiAvatar4,
  },
  {
    name: "Luis Ramirez",
    position: "CEO | GoVirtual",
    text: "Gab has been a fantastic asset as a freelance developer. His work on the E-Learning Platform, where he built the frontend using React, Vite, and Million.js, showcased an ability to deliver high-performance solutions. The interface was styled beautifully with Tailwind CSS and DaisyUI, resulting in a responsive and user-friendly experience. Additionally, Gab developed the Quick Forms API, implementing a clean backend architecture using Express, Node.js, and MongoDB. His expertise in API integration, Cloudinary setup, and role-based access control made the solution robust and reliable. His commitment to excellence and ability to consistently exceed expectations make him a valuable addition to any project.",
    avatar: MemojiAvatar5,
  },
  {
    name: "Renyeljay Sioc",
    position: "IT Support | Meatworld International Inc.",
    text: "Working with Gab during our thesis project was an invaluable experience. As the head lead, he guided me through the development process, using the MERN stack and React Native for the mobile app. Gab also helped us design the user interface with Figma, ensuring a cohesive and user-friendly look across the project. His mentorship made complex tasks manageable, and his expertise in both frontend and backend development was key to our project's success. I am grateful for his leadership and guidance throughout the process.",
    avatar: MemojiAvatar1,
  },
  {
    name: "Crislhan Fabila",
    position: "Student | TUP Taguig",
    text: "Working together on various projects was a valuable experience. Gab consistently shared his knowledge and skills, whether it involved frontend development, backend integration, or project design. His clear explanations and hands-on approach made the projects smoother and more manageable. The guidance and technical expertise he provided played a significant role in the success of our work, and the skills gained from these projects have been incredibly beneficial.",
    avatar: MemojiAvatar2,
  },
  {
    name: "John Heinrich Fabros",
    position: "Junior Software Engineer | Globagility",
    text: "Collaborating with Gab on various projects has been an enriching experience. His skills in both frontend and backend development made a significant impact on our team's productivity. Whether we were tackling complex coding challenges or refining the user interface, Gab consistently brought innovative solutions and a keen eye for detail. His collaborative approach and willingness to help others made working together smooth and productive. I truly valued the opportunity to learn and grow alongside him.",
    avatar: MemojiAvatar3,
  },
  {
    name: "Angel Ivory",
    position: "Student | EAC-Cavite",
    text: "Working alongside Gab during our internship was a great experience. He consistently showed a strong work ethic and shared valuable knowledge, which helped us tackle various tasks more efficiently. His approach to problem-solving made a big difference, as he always found practical solutions to challenges. The support and collaboration throughout the internship made the entire experience more rewarding, and I'm grateful for the opportunity to work together.",
    avatar: MemojiAvatar4,
  },
  {
    name: "Jason Garganera Castillon",
    position: "Student | EAC-Cavite",
    text: "Working alongside Gab during our internship was a valuable experience. He consistently demonstrated a strong work ethic and a willingness to share his knowledge. Gab's technical skills in both frontend and backend development were impressive, and he approached challenges with a problem-solving mindset. The collaboration and support throughout our internship made the experience more enjoyable and productive. I'm grateful for the opportunity to learn from someone so dedicated.",
    avatar: MemojiAvatar5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div>
        <SectionHeader
          eyebrow="Happy Associates"
          title="What Associates Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(3)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 border-2 border-transparent transition-all duration-500 hover:-rotate-[1.5deg] hover:border-light-default hover:border-2"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-dark-variant2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-light-default/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 text-sm md:text-base max-h-32 overflow-x-auto scrollbar-thin pr-2">
                      {testimonial.text}
                    </div>
                  </Card>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
