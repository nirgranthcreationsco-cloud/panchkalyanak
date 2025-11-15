'use client';
import { useState } from 'react';

const DonationSection = () => {
  const [formData, setFormData] = useState({
    donationAmount: 0,
    donorName: '',
    donorPhone: '',
    donorEmail: '',
    donationPurpose: '',
  });

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-9xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-7xl">🪔</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Emotional Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="text-7xl animate-bounce">💝</div>
          </div>
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 mb-6 leading-tight">
            आपका छोटा सा योगदान<br />हमारे लिए सब कुछ है
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            हर दान, हर रुपया, तीर्थ निर्माण में एक पवित्र ईंट है।  
            आपकी श्रद्धा से ही यह महायज्ञ संपन्न होगा।
          </p>
        </div>

        {/* Main Donation Box */}
        <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl border-4 border-double border-amber-400 overflow-hidden">
          {/* Golden Header Bar */}
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 p-6 text-center">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              दान करें - पुण्य कमाएं
              <span className="text-4xl">✨</span>
            </h3>
            <p className="text-amber-100 mt-2 text-lg">पवित्र पुण्य कमाने का अवसर</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Inspirational Quote */}
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-8 border-l-4 border-orange-500">
              <p className="text-xl text-gray-800 italic text-center font-semibold">
                "दान से बड़ा कोई धर्म नहीं, दाता से बड़ा कोई देवता नहीं"
              </p>
            </div>

            {/* Quick Donation Buttons */}
            <div className="mb-8">
              <label className="block text-gray-700 font-bold text-xl mb-4 text-center">
                🎁 अपनी श्रद्धानुसार राशि चुनें
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[501, 1100, 2100, 5100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setFormData({ ...formData, donationAmount: amount })}
                    className={`p-6 rounded-2xl font-bold text-xl transform hover:scale-105 transition-all duration-300 border-3 ${
                      formData.donationAmount === amount
                        ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-white border-orange-600 shadow-xl scale-105'
                        : 'bg-white border-orange-300 text-orange-600 hover:border-orange-500'
                    }`}
                  >
                    ₹{amount.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="mb-8">
              <label className="block text-gray-700 font-bold text-lg mb-3">
                💰 या अपनी इच्छानुसार राशि दर्ज करें
              </label>
              <input
                type="number"
                value={formData.donationAmount || ''}
                onChange={(e) =>
                  setFormData({ ...formData, donationAmount: parseInt(e.target.value) || 0 })
                }
                className="w-full px-6 py-4 border-3 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none text-2xl font-bold text-center text-orange-600"
                placeholder="₹ राशि दर्ज करें"
                min="1"
              />
            </div>

            {/* Donor Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  🙏 दाता का नाम
                </label>
                <input
                  type="text"
                  value={formData.donorName}
                  onChange={(e) =>
                    setFormData({ ...formData, donorName: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  placeholder="अपना नाम दर्ज करें"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  📱 व्हाट्सएप नंबर
                </label>
                <input
                  type="tel"
                  value={formData.donorPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, donorPhone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                📧 ईमेल पता
              </label>
              <input
                type="email"
                value={formData.donorEmail}
                onChange={(e) =>
                  setFormData({ ...formData, donorEmail: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Donation Purpose */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                🎯 दान का उद्देश्य
              </label>
              <select
                value={formData.donationPurpose}
                onChange={(e) =>
                  setFormData({ ...formData, donationPurpose: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
              >
                <option value="">उद्देश्य चुनें</option>
                <option value="tirth_nirman">तीर्थ निर्माण</option>
                <option value="pratishtha">प्रतिष्ठा महोत्सव</option>
                <option value="prasad">प्रसाद सेवा</option>
                <option value="general">सामान्य दान</option>
                <option value="other">अन्य</option>
              </select>
            </div>

            {/* Transparency Message */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border-2 border-green-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h4 className="font-bold text-green-800 text-xl mb-2">
                    💯 पूर्ण पारदर्शिता की गारंटी
                  </h4>
                  <p className="text-green-700 leading-relaxed">
                    आपका प्रत्येक रुपया सीधे तीर्थ निर्माण सेवा में जाता है।  
                    हम पूर्ण पारदर्शिता और श्रद्धा के साथ कार्य करते हैं।
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '📜', text: 'तुरंत डिजिटल रसीद' },
                { icon: '🏆', text: 'ई-प्रमाण पत्र' },
                { icon: '📲', text: 'व्हाट्सएप अपडेट्स' },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-orange-50 rounded-xl p-4 text-center border-2 border-orange-200"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-gray-800">{benefit.text}</div>
                </div>
              ))}
            </div>

            {/* Main Donate Button */}
            <button
              onClick={() => {
                if (!formData.donationAmount || formData.donationAmount < 1) {
                  alert('कृपया दान राशि दर्ज करें');
                  return;
                }
                if (!formData.donorName || !formData.donorPhone || !formData.donorEmail) {
                  alert('कृपया सभी विवरण भरें');
                  return;
                }
                alert(`🙏 धन्यवाद ${formData.donorName}!\n\nआपका ₹${formData.donationAmount.toLocaleString('en-IN')} का दान पवित्र सेवा हेतु स्वीकार किया गया है।\n\nजय जिनेंद्र! 🕉️`);
                setFormData({
                  donationAmount: 0,
                  donorName: '',
                  donorPhone: '',
                  donorEmail: '',
                  donationPurpose: '',
                });
              }}
              className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white py-6 rounded-2xl font-bold text-2xl hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-4"
            >
              <span className="text-3xl">🙏</span>
              अभी दान करें
              <span className="text-3xl">💝</span>
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              🔒 सुरक्षित भुगतान - 100% सेफ और एन्क्रिप्टेड
            </p>
          </div>
        </div>

        {/* Final Emotional Appeal */}
        <div className="mt-12 text-center bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 rounded-3xl p-8 border-3 border-orange-300">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            🪔 "आपकी श्रद्धा का एक दीपक, हजारों जीवन रोशन करे" 🪔
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
