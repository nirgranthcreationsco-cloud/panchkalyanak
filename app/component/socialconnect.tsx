import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialConnectSection = () => (
  <section className="py-20 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-center">
    <h3 className="text-4xl font-bold text-white mb-10">Connect With Us</h3>
    <div className="flex justify-center gap-8">
      {[{ icon: <Instagram />, color: 'from-pink-500 to-purple-600' }, { icon: <Facebook />, color: 'from-blue-500 to-blue-700' }, { icon: <Youtube />, color: 'from-red-500 to-red-700' }].map((s, i) => (
        <div key={i} className={`p-6 bg-gradient-to-r ${s.color} rounded-2xl shadow-lg text-white hover:scale-110 transition`}>
          {s.icon}
        </div>
      ))}
    </div>
  </section>
);

export default SocialConnectSection;
