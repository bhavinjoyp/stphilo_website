"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getLinkHref } from "../lib/utils";

export default function Home() {
  const [_isVisible, _setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-lato text-foundation-charcoal">
      <Header currentPath="/" />
      <main>
        {/* Hero Section - YouTube Video Player */}
        <section className="relative h-screen w-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/AaEerJgJqto?autoplay=1&mute=1&loop=1&playlist=AaEerJgJqto&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="St. Philomena's School Video"
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{ 
              transform: 'translate(-50%, -50%)',
              minWidth: '100%', 
              minHeight: '100%',
              width: '177.77vh', // 16:9 aspect ratio
              height: '56.25vw'  // 16:9 aspect ratio
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/20 z-10" />

          <div className="relative z-20 flex flex-col items-start justify-center h-full text-left text-white p-8 md:p-16 lg:p-24">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Shaping Compassionate <br />
              Leaders for Tomorrow
            </h1>
            <div className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <PrimaryButton href={getLinkHref("/about")}>
                EXPLORE
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* About Snapshot Section */}
        <section id="about" className="relative py-24 animate-fadeInUp">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="School campus background"
              fill
              className="object-cover"
            />
            {/* Gradient overlay diagonally from left to right */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(115deg, rgba(238,238,238,1) 40%, rgba(238,238,238,0) 100%)' }}
            />
          </div>
          {/* Content container */}
          <div className="relative max-w-4xl mx-auto px-8 md:px-6 text-left space-y-6">
            <h2 className="flex items-center text-3xl font-bold text-almost-black uppercase mb-4 tracking-widest">
              <span className="w-1 h-8 bg-brand-red mr-4"></span>
              Our Story & Mission
            </h2>
            <p className="text-dark-gray text-base md:text-lg leading-relaxed max-w-2xl">
              Founded by St. Mary Euphrasia Pelletier, we live our vision of "Love and Compassion" by empowering young women through value-based education and service. At St. Philomena's, you'll find a steadfast commitment to faith formation, social justice and environmental responsibility—combined with rigorous academics.
            </p>
            <SecondaryButton href={getLinkHref("/about")}>
              LEARN MORE
            </SecondaryButton>
          </div>
        </section>



        {/* Curriculum Hero Section */}
        <section className="bg-white pb-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="container mx-auto px-6 pt-10 pb-2 text-center">
            <h2 className="flex items-center justify-center text-3xl font-bold text-foundation-charcoal uppercase mb-1 tracking-widest">
              <span className="w-1 h-8 bg-[#A6192E] mr-4"></span>
              Karnataka State Board Excellence
            </h2>
            <p className="text-foundation-charcoal text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-0">
              Our students thrive under the rigorous KSBE curriculum—supported by expert faculty and engaging labs.
            </p>
          </div>
        </section>
        {/* Redesigned Academic Programs Section */}
        <section className="pt-0 pb-16 sm:py-12 bg-pristine-cream mt-0">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Nursery Card */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80" 
                    alt="Nursery classroom" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>Ages 3-5</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-joyful-coral transition-colors duration-300">
                    Nursery 
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Foundation years focused on play-based learning, early childhood development, and nurturing creativity in a safe, supportive environment.
                  </p>
                  <a 
                    href={getLinkHref("/admissions/nursery")} 
                    className="inline-flex items-center text-joyful-coral font-semibold hover:text-joyful-coral/80 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>

              {/* Grade 1-10 Card */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" 
                    alt="Grade 1-10 classroom" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>Ages 6-16</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-wisdom-blue transition-colors duration-300">
                    Grade 1-10
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Comprehensive academic program building strong foundations in all core subjects with emphasis on critical thinking and character development.
                  </p>
                  <a 
                    href={getLinkHref("/admissions/grades-1-10")} 
                    className="inline-flex items-center text-wisdom-blue font-semibold hover:text-wisdom-blue/80 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>

              {/* PUC Card */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" 
                    alt="PUC students" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>Ages 16-18</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-[#A6192E] transition-colors duration-300">
                    PUC
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Pre-university course preparing students for higher education and career success with specialized streams and advanced learning opportunities.
                  </p>
                  <a 
                    href={getLinkHref("/admissions/puc")} 
                    className="inline-flex items-center text-[#A6192E] font-semibold hover:text-[#A6192E]/80 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Principal's Message Section */}
        <section className="relative py-24 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Principal with students"
              fill
              className="object-cover"
            />
            {/* Gradient overlay diagonally from right to left (vice versa of Our Story) */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(-115deg, rgba(238,238,238,1) 40%, rgba(238,238,238,0) 100%)' }}
            />
          </div>
          {/* Content container - aligned to the right */}
          <div className="relative max-w-4xl mx-auto px-8 md:px-6 text-right space-y-6 flex justify-end">
            <div className="max-w-2xl">
              <h2 className="flex items-center justify-end text-3xl font-bold text-almost-black uppercase mb-4 tracking-widest">
                Principal's Message
                <span className="w-1 h-8 bg-brand-red ml-4"></span>
              </h2>
              <p className="text-dark-gray text-base md:text-lg leading-relaxed">
                St. Philomena's is a school that is focused on nurturing curiosity, building confidence, and preparing young women for a future full of possibility. I am immensely proud to be its Principal and witness the remarkable growth of each student in our caring community.
              </p>
              <div className="flex justify-end">
                <SecondaryButton href={getLinkHref("/about/leadership")}>
                  LEARN MORE
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Student Life Preview Section */}
        <section className="bg-pristine-cream py-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-3xl font-bold text-foundation-charcoal uppercase mb-4 tracking-widest">
                <span className="w-1 h-8 bg-wisdom-blue mr-4"></span>
                Life at St. Philomena's
              </h2>
              <p className="text-foundation-charcoal text-lg leading-relaxed max-w-3xl mx-auto">
                Explore our vibrant clubs, sports teams and traditions—where every student finds her spark and builds lifelong friendships.
              </p>
            </div>

            {/* Interactive Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Cultural Fest Card */}
              <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp">
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" 
                    alt="Students performing at cultural fest" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-lora font-semibold mb-2">Cultural Celebrations</h3>
                  <p className="text-sm">Annual festivals, drama performances, and artistic expressions that celebrate our diverse heritage.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-lora font-semibold text-joyful-coral mb-2 group-hover:text-white transition-colors duration-500">Cultural Celebrations</h3>
                  <p className="text-foundation-charcoal text-sm group-hover:text-transparent transition-colors duration-500">Vibrant festivals and artistic expressions</p>
                </div>
              </div>

              {/* Sports Day Card */}
              <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=600&q=80" 
                    alt="Students participating in sports activities" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-lora font-semibold mb-2">Athletic Excellence</h3>
                  <p className="text-sm">Competitive sports teams, fitness programs, and inter-school tournaments fostering teamwork and leadership.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-lora font-semibold text-wisdom-blue mb-2 group-hover:text-white transition-colors duration-500">Athletic Excellence</h3>
                  <p className="text-foundation-charcoal text-sm group-hover:text-transparent transition-colors duration-500">Sports teams and fitness programs</p>
                </div>
              </div>

              {/* Club Meeting Card */}
              <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                <div className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                    alt="Students in club meeting or discussion" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-lora font-semibold mb-2">Student Clubs & Societies</h3>
                  <p className="text-sm">Debate clubs, science societies, and community service groups where interests become passions.</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-lora font-semibold text-[#A6192E] mb-2 group-hover:text-white transition-colors duration-500">Student Clubs & Societies</h3>
                  <p className="text-foundation-charcoal text-sm group-hover:text-transparent transition-colors duration-500">Diverse clubs and interest groups</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-foundation-charcoal text-lg mb-8 max-w-2xl mx-auto">
                From academic competitions to community service, our students discover their passions and develop the confidence to make a difference in the world.
              </p>
              <div className="flex justify-center">
                <SecondaryButton href={getLinkHref("/student-life")}>
                  View Student Life 
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* News & Announcements Section */}
        <section className="bg-[#EEEEEE] py-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-3xl font-bold text-foundation-charcoal uppercase mb-4 tracking-widest">
                News & Announcements
              </h2>
              <p className="text-foundation-charcoal text-lg leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest happenings, achievements, and important announcements from our school community.
              </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Featured News Post #1 */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" 
                    alt="Annual Prize Distribution Ceremony" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>December 15, 2024</span>
                    <span className="mx-2">•</span>
                    <span>School Events</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-[#A6192E] transition-colors duration-300">
                    Annual Prize Distribution Ceremony 2024
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Join us in celebrating the outstanding achievements of our students as we honor academic excellence, leadership, and community service contributions during our annual ceremony.
                  </p>
                  <a 
                    href={getLinkHref("/community/news/prize-distribution-2024")} 
                    className="inline-flex items-center text-[#A6192E] font-semibold hover:text-[#A6192E]/80 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>

              {/* Featured News Post #2 */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80" 
                    alt="Science Fair Excellence" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>December 10, 2024</span>
                    <span className="mx-2">•</span>
                    <span>Academic News</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-wisdom-blue transition-colors duration-300">
                    St. Philomena's Students Excel at Regional Science Fair
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Our Grade 9 students secured first and second place at the Karnataka Regional Science Fair with innovative projects on sustainable energy and environmental conservation.
                  </p>
                  <a 
                    href={getLinkHref("/community/news/science-fair-2024")} 
                    className="inline-flex items-center text-wisdom-blue font-semibold hover:text-wisdom-blue/80 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>

              {/* Featured News Post #3 */}
              <article className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80" 
                    alt="Inter-School Sports Championship" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foundation-charcoal/60 mb-3">
                    <span>December 5, 2024</span>
                    <span className="mx-2">•</span>
                    <span>Sports</span>
                  </div>
                  <h3 className="text-xl font-lora font-semibold text-foundation-charcoal mb-3 group-hover:text-joyful-coral transition-colors duration-300">
                    Inter-School Sports Championship Victory
                  </h3>
                  <p className="text-foundation-charcoal/80 text-base leading-relaxed mb-4">
                    Our athletics team brought home the championship trophy, showcasing exceptional teamwork and sportsmanship in various track and field events.
                  </p>
                  <a 
                    href={getLinkHref("/community/news/sports-championship-2024")} 
                    className="inline-flex items-center text-joyful-coral font-semibold hover:text-joyful-coral/80 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex justify-center">
                <SecondaryButton href={getLinkHref("/community/news")}>
                  See All News
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}