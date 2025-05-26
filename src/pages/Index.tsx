import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, Star, Users, MapPin, Calendar, Piano, Square, Utensils, Volume2, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="다크모드 토글"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              아이와 나, 우리만의 시간을 위한
              <span className="block text-orange-600 dark:text-orange-400 mt-2">
                프라이빗 공간
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              전면거울, 피아노, 아일랜드 식탁, 블루투스 스피커까지
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              아이는 뛰놀고, 엄마는 웃으며 대화할 수 있는 하남 프라이빗 플레이룸
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                지금 예약하기
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <Star className="w-5 h-5 mr-2" />
                방문 후기 보기
              </Button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4 mr-1" />
              <span>이미 </span>
              <span className="text-orange-600 dark:text-orange-400 font-semibold mx-1">1,247명</span>
              <span>이 방문했어요</span>
            </div>
          </div>
        </div>

        {/* Hero Background Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
      </section>

      {/* Service Introduction Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              시끄러운 키즈카페 대신,
              <span className="block text-orange-600 dark:text-orange-400">감성 가득한 하남 공간</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              아이와 함께, 엄마도 편안한 공간에서 가족모임부터 아이 생일파티까지 한 번에
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-orange-50 dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  프라이빗한 공간
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                  오직 우리 가족만을 위한 독립된 공간에서 편안하게 시간을 보내세요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  가족 친화적
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                  아이는 안전하게 뛰어놀고, 어른들은 편안하게 대화할 수 있는 환경
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  특별한 시설
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                  전면거울, 피아노, 아일랜드 식탁 등 다양한 편의시설 완비
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              공간 특징
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              아이와 엄마 모두를 위한 특별한 시설들
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Square className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">전면 거울</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                넓은 전면 거울로 공간이 더욱 넓어 보여요
              </p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Piano className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">피아노</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                아이와 함께 음악을 즐길 수 있어요
              </p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Utensils className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">아일랜드 식탁</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                간식이나 식사를 편리하게 즐기세요
              </p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Volume2 className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">블루투스 스피커</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                좋아하는 음악과 함께 특별한 시간을
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              사용자 후기
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              희나스페이스를 이용하신 분들의 생생한 후기
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">김○○님</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  "아이 생일파티로 이용했는데 정말 만족해요! 조용하고 깨끗해서 사진도 예쁘게 나오고, 아이들이 너무 좋아했어요."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">박○○님</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  "키즈카페 대신 찾던 곳이에요. 조용해서 어른들끼리 대화도 잘 되고, 시설도 깔끔해서 재방문 의사 100%!"
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">이○○님</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  "피아노가 있어서 아이가 정말 좋아해요. 거울도 있어서 공간이 넓어 보이고, 무엇보다 프라이빗해서 편해요."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-600 dark:bg-blue-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 예약하세요
          </h2>
          <p className="text-lg text-orange-100 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
            아이와 함께하는 특별한 시간, 희나스페이스에서 만들어보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              예약하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Camera className="w-5 h-5 mr-2" />
              갤러리 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">희나스페이스</h3>
          <p className="text-gray-400 mb-4">
            아이와 나, 우리만의 시간을 위한 프라이빗 공간
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              KakaoTalk
            </a>
            <a href="mailto:contact@heenaspace.com" className="text-gray-400 hover:text-orange-400 transition-colors">
              Email
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-4 text-sm text-gray-500">
            <p>&copy; 2024 희나스페이스. 프론트엔드 포트폴리오용 프로젝트</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
