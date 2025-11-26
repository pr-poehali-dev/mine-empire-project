import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "rules", "about", "forum", "discord", "team"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-primary">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary pixel-corners flex items-center justify-center">
                <span className="text-2xl">⛏️</span>
              </div>
              <h1 className="text-2xl font-bold text-shadow-pixel">MineEmpire</h1>
            </div>
            <div className="hidden md:flex gap-2">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "rules", label: "Правила", icon: "BookOpen" },
                { id: "about", label: "О сервере", icon: "Info" },
                { id: "forum", label: "Форум", icon: "MessagesSquare" },
                { id: "discord", label: "Discord", icon: "MessageSquare" },
                { id: "team", label: "Команда", icon: "Users" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="pixel-corners font-semibold"
                  onClick={() => scrollToSection(item.id)}
                >
                  <Icon name={item.icon} size={16} className="mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden pixel-corners"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
          <div id="mobile-menu" className="hidden md:hidden mt-4 flex flex-col gap-2">
            {[
              { id: "home", label: "Главная", icon: "Home" },
              { id: "rules", label: "Правила", icon: "BookOpen" },
              { id: "about", label: "О сервере", icon: "Info" },
              { id: "forum", label: "Форум", icon: "MessagesSquare" },
              { id: "discord", label: "Discord", icon: "MessageSquare" },
              { id: "team", label: "Команда", icon: "Users" },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="pixel-corners font-semibold w-full"
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
              >
                <Icon name={item.icon} size={16} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/1409a0d7-7f13-4583-9e14-c37f482e8fa4/files/cf3b9958-6e33-4286-931d-b38b75038da5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="text-6xl mb-4">⚔️</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-shadow-pixel animate-scale-in text-primary">
            MineEmpire
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-shadow-pixel">
            Закон и Хаос 👑
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Присоединяйся к активному сообществу! Крутые турниры, новые друзья и незабываемые приключения ждут тебя
          </p>
          <div className="mb-8 flex justify-center">
            <Card className="px-6 py-3 pixel-corners bg-card/90 backdrop-blur-sm border-2 border-accent inline-block">
              <div className="flex items-center gap-3">
                <Icon name="Server" size={24} className="text-accent" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-semibold">IP СЕРВЕРА:</p>
                  <p className="text-xl font-bold text-accent font-mono">play.mineempire.ru</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="pixel-corners ml-2"
                  onClick={() => {
                    navigator.clipboard.writeText('play.mineempire.ru');
                  }}
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="pixel-corners font-bold text-lg hover-scale"
              onClick={() => scrollToSection("discord")}
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Войти в Discord
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="pixel-corners font-bold text-lg hover-scale"
              onClick={() => scrollToSection("about")}
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Icon name="BookOpen" size={48} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-shadow-pixel">Правила сервера</h2>
            <p className="text-muted-foreground text-lg">Соблюдай правила и наслаждайся игрой!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "Shield",
                title: "Уважение к игрокам",
                desc: "Запрещены оскорбления, домогательства и токсичное поведение",
              },
              {
                icon: "Ban",
                title: "Честная игра",
                desc: "Читы, баги и эксплойты строго запрещены",
              },
              {
                icon: "Hammer",
                title: "Гриферство",
                desc: "Разрушение чужих построек без разрешения недопустимо",
              },
              {
                icon: "MessageCircle",
                title: "Чистый чат",
                desc: "Спам, реклама и мат в чате запрещены",
              },
            ].map((rule, idx) => (
              <Card
                key={idx}
                className="p-6 pixel-corners hover-scale bg-card border-2 border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary pixel-corners flex items-center justify-center flex-shrink-0">
                    <Icon name={rule.icon} size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground">{rule.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Icon name="Pickaxe" size={48} className="text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-shadow-pixel">О сервере</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              MineEmpire — это уникальный игровой опыт с классическим режимом выживания и улучшениями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "Swords",
                title: "Выживание с улучшениями",
                desc: "Классический режим с дополнительными возможностями и механиками",
              },
              {
                icon: "Trophy",
                title: "Турниры и ивенты",
                desc: "Регулярные события, конкурсы и призы для активных игроков",
              },
              {
                icon: "Users",
                title: "Дружное сообщество",
                desc: "Активное и отзывчивое комьюнити всегда готово помочь",
              },
              {
                icon: "Zap",
                title: "Стабильная работа",
                desc: "99.9% аптайма, защита от DDoS и регулярные бэкапы",
              },
              {
                icon: "Star",
                title: "Кастомные фичи",
                desc: "Уникальные плагины и механики, которых нет на других серверах",
              },
              {
                icon: "Crown",
                title: "Система рангов",
                desc: "Развивайся, получай награды и открывай новые возможности",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 pixel-corners hover-scale bg-card border-2 border-border text-center"
              >
                <div className="w-16 h-16 bg-secondary pixel-corners flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="forum" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Icon name="MessagesSquare" size={48} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-shadow-pixel">Форум</h2>
            <p className="text-muted-foreground text-lg">Обсуждай, делись опытом и находи ответы</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                title: "📢 Новости и объявления",
                desc: "Последние обновления сервера и важные анонсы",
                posts: 42,
                icon: "Megaphone",
                color: "primary",
              },
              {
                title: "💬 Общение",
                desc: "Болтай на любые темы с игроками сообщества",
                posts: 256,
                icon: "MessageCircle",
                color: "accent",
              },
              {
                title: "❓ Помощь и вопросы",
                desc: "Нужна помощь? Спроси здесь!",
                posts: 189,
                icon: "HelpCircle",
                color: "secondary",
              },
              {
                title: "💡 Предложения",
                desc: "Предлагай идеи по улучшению сервера",
                posts: 78,
                icon: "Lightbulb",
                color: "accent",
              },
              {
                title: "🎮 Игровой процесс",
                desc: "Обсуждай механики, стратегии и гайды",
                posts: 134,
                icon: "Gamepad2",
                color: "primary",
              },
            ].map((category, idx) => (
              <Card
                key={idx}
                className="p-6 pixel-corners hover-scale bg-card border-2 border-border cursor-pointer transition-all hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-${category.color} pixel-corners flex items-center justify-center flex-shrink-0`}>
                      <Icon name={category.icon} size={28} className={`text-${category.color}-foreground`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                      <p className="text-muted-foreground text-sm">{category.desc}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-primary">{category.posts}</div>
                    <div className="text-xs text-muted-foreground">тем</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="pixel-corners font-bold text-lg hover-scale"
            >
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Перейти на форум
            </Button>
          </div>
        </div>
      </section>

      <section id="discord" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <Icon name="MessageSquare" size={64} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-shadow-pixel">
              Присоединяйся к Discord!
            </h2>
            <Card className="p-8 pixel-corners bg-card border-2 border-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">🔹 Что тебя ждет:</h3>
                <ul className="text-left space-y-2 max-w-md mx-auto">
                  {[
                    "Общение с единомышленниками",
                    "Новости и обновления проекта",
                    "Участие в конкурсах и мероприятиях",
                    "Совместные игры и командные бои",
                    "Эксклюзивные роли и привилегии",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">🔹 Почему стоит присоединиться:</h3>
                <ul className="text-left space-y-2 max-w-md mx-auto">
                  {[
                    "Дружелюбная атмосфера",
                    "Активное и растущее сообщество",
                    "Постоянные события и розыгрыши",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-bold">★</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                className="pixel-corners font-bold text-lg hover-scale"
                onClick={() => window.open("https://discord.gg/JWX9HCk3", "_blank")}
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Войти в Discord
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Ждем тебя! 🎉</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Icon name="Users" size={48} className="text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-shadow-pixel">Наша команда</h2>
            <p className="text-muted-foreground text-lg">Люди, которые делают MineEmpire возможным</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                role: "Основатель",
                icon: "Crown",
                desc: "Создатель и вдохновитель проекта",
              },
              {
                role: "Администраторы",
                icon: "ShieldCheck",
                desc: "Следят за порядком и развитием сервера",
              },
              {
                role: "Модераторы",
                icon: "Shield",
                desc: "Помогают игрокам и решают конфликты",
              },
            ].map((member, idx) => (
              <Card
                key={idx}
                className="p-8 pixel-corners hover-scale bg-card border-2 border-border text-center"
              >
                <div className="w-20 h-20 bg-accent pixel-corners flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon} size={40} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.role}</h3>
                <p className="text-muted-foreground">{member.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary pixel-corners flex items-center justify-center">
              <span className="text-xl">⛏️</span>
            </div>
            <span className="text-xl font-bold">MineEmpire</span>
          </div>
          <p className="text-muted-foreground mb-2">Закон и Хаос 👑</p>
          <p className="text-sm text-muted-foreground">© 2025 MineEmpire. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;