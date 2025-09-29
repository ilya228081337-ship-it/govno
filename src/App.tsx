import React, { useState } from 'react';
import { 
  Gift, 
  Copy, 
  Check, 
  ShoppingBag, 
  CreditCard, 
  Percent, 
  Star,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Shield,
  FileText,
  Phone,
  AlertTriangle,
  Sparkles,
  Heart,
  Zap
} from 'lucide-react';

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  const promoCode = "SAVE50NOW";

  const handleRevealDiscount = () => {
    if (isRevealed) return;
    
    setPulseAnimation(true);
    setIsAnimating(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsAnimating(false);
      setPulseAnimation(false);
    }, 300);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-pink-400/10 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Header */}
      <header className="relative pt-8 pb-4 px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl mb-3 border border-white/20">
          <div className="relative">
            <Gift className="w-10 h-10 text-purple-600" />
            <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">DiscountApp</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mx-auto mt-2"></div>
      </header>

      {/* Main Content */}
      <main className="relative px-6 pb-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Скидки до 50% в популярных магазинах
          </h2>
          <p className="text-2xl text-purple-100 mb-3 font-semibold">
            тапни и получи купон
          </p>
          <p className="text-lg text-purple-200 mb-10 font-medium">
            Без установки — просто возьми промокод и сэкономь
          </p>

          {/* Interactive Discount Card */}
          <div className="relative max-w-sm mx-auto mb-12">
            <div 
              className={`relative bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-8 cursor-pointer transform transition-all duration-500 border border-white/20 ${
                isAnimating ? 'scale-95 rotate-2' : isRevealed ? 'scale-105 shadow-3xl' : 'hover:scale-105 hover:shadow-3xl'
              } ${pulseAnimation ? 'animate-pulse-strong' : ''}`}
              style={{
                boxShadow: isRevealed 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              onClick={handleRevealDiscount}
            >
              {!isRevealed ? (
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <Gift className="w-14 h-14 text-white relative z-10" />
                    <div className="absolute inset-0 rounded-full animate-ping bg-white/20"></div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                    Получить скидку
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Тапни, чтобы открыть
                  </p>
                  <div className="w-full h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Zap className="w-5 h-5 text-white mr-2 animate-bounce" />
                    <span className="text-white font-bold text-lg relative z-10">Тапнуть сюда!</span>
                  </div>
                </div>
              ) : (
                <div className="text-center animate-fade-in-up">
                  <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                    <Percent className="w-14 h-14 text-white relative z-10" />
                    <div className="absolute inset-0 rounded-full animate-pulse bg-white/20"></div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                    Ваша скидка готова!
                  </h3>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border border-gray-200 shadow-inner">
                    <p className="text-sm text-gray-600 mb-3 font-medium">Промокод:</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider">
                      {promoCode}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isCopied ? (
                      <div className="flex items-center space-x-2 relative z-10">
                        <Check className="w-5 h-5" />
                        <span>Скопировано!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 relative z-10">
                        <Copy className="w-5 h-5" />
                        <span>Копировать код</span>
                      </div>
                    )}
                  </button>
                  <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 shadow-sm">
                    <p className="text-sm text-yellow-800 font-medium leading-relaxed">
                      📅 Промокод действует 7 дней<br/>
                      ⚠️ Скидка не суммируется с другими акциями
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Floating elements for decoration */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Как это работает
          </h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-white to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Выберите купон</h4>
                <p className="text-purple-100 font-medium">Тапните по карточке и получите промокод</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-white to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Покажите при оплате</h4>
                <p className="text-purple-100 font-medium">Введите или покажите код в магазине</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-white to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Percent className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Получите скидку</h4>
                <p className="text-purple-100 font-medium">Экономьте до 50% на покупках</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Отзывы пользователей
          </h3>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white mb-3 font-medium leading-relaxed">
                "Действительно работает! Сэкономил 500 рублей на покупках"
              </p>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <p className="text-purple-200 text-sm font-medium">Алексей М.</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white mb-3 font-medium leading-relaxed">
                "Удобно и быстро. Код сразу копируется"
              </p>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <p className="text-purple-200 text-sm font-medium">Мария К.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <button className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Twitter className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <button className="flex items-center space-x-3 text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Политика конфиденциальности</span>
            </button>
            <button className="flex items-center space-x-3 text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <FileText className="w-4 h-4" />
              <span className="font-medium">Условия использования</span>
            </button>
            <button className="flex items-center space-x-3 text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Контакты</span>
            </button>
            <button className="flex items-center space-x-3 text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <Mail className="w-4 h-4" />
              <span className="font-medium">Поддержка</span>
            </button>
          </div>

          {/* Report Problem Button */}
          <button className="w-full bg-red-500/20 border border-red-400/30 text-red-100 py-4 px-6 rounded-xl hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center space-x-3 font-medium hover:scale-105">
            <AlertTriangle className="w-4 h-4" />
            <span>Сообщить о проблеме</span>
          </button>

          <div className="text-center mt-8 text-sm text-purple-200 font-medium">
            © 2025 DiscountApp. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
             

