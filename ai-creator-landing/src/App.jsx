export default function App() {
  const TELEGRAM_URL = 'https://t.me/katyaa1010';
  const MAX_URL = 'https://max.ru/u/f9LHodD0cOK51JgxATqo_PGZVeFgjfDCRg7mZxvhIb2OiJomduNzr_r7VIk';
  const OFFER_URL = 'https://disk.yandex.ru/d/fjz99e9ghJZW_g';
  const PAYMENT_URL = 'https://payment.alfabank.ru/sc/JdZEIiFDlCJnVEJQ';
  const CONSENT_URL = 'https://disk.yandex.ru/d/tclsfYYEF3T46A';
  const POLICY_URL = 'https://disk.yandex.ru/d/0gG5v8M7upvg4w';

  const heroPhoto = '/hero-katya.png';

  const services = [
    {
      title: 'Оформление визуала VK',
      description:
        'Комплексно оформляю сообщество ВКонтакте так, чтобы оно цепляло внимание, вызывало доверие и подводило клиента к заявке или покупке. Вы получаете не только дизайн, а сразу несколько решений в одном: я закрываю задачи дизайнера, специалиста по чат-ботам и помогаю выстроить понятный путь клиента от первого касания до покупки. Продумываю визуал, структуру и точки взаимодействия с аудиторией, чтобы сообщество выглядело профессионально и превращало посетителей в клиентов.',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
          <path d="M32 10 50 20v23L32 54 14 43V20l18-10Z" stroke="currentColor" strokeWidth="2.6" />
          <path d="M32 10v44M14 20l18 10 18-10" stroke="currentColor" strokeWidth="2.6" />
        </svg>
      ),
    },
    {
      title: 'Настройка чат-бота',
      description:
        'Настраиваю чат-бота для автоматизации общения с клиентами, обработки заявок и удобной коммуникации внутри сообщества. Чат-бот отвечает на частые вопросы, проводит клиента по нужному сценарию, собирает обращения и помогает не упускать потенциальных покупателей. Больше не нужно вручную отвечать каждому клиенту. Это не просто бот, а рабочий инструмент для повышения скорости обработки заявок, качества сервиса и конверсии в продажи. Основную часть переписки ведёт бот, Вам остаётся получить горячую заявку и обработать её.',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
          <rect x="12" y="15" width="40" height="26" rx="8" stroke="currentColor" strokeWidth="2.8" />
          <circle cx="25" cy="28" r="3.5" fill="currentColor" />
          <circle cx="39" cy="28" r="3.5" fill="currentColor" />
          <path d="M22 48h20M32 41v7M18 20v-5M46 20v-5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Аватар и обложки',
      description: 'Делаю аватар группы и обложку сообщества в двух версиях: для ПК и для мобильных устройств.',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
          <path d="M22 16c5 0 9 4 9 9v14c0 5-4 9-9 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M42 16c-5 0-9 4-9 9v14c0 5 4 9 9 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="17" cy="17" r="3" fill="currentColor" />
          <circle cx="47" cy="17" r="3" fill="currentColor" />
          <circle cx="17" cy="47" r="3" fill="currentColor" />
          <circle cx="47" cy="47" r="3" fill="currentColor" />
          <circle cx="32" cy="24" r="2.5" fill="currentColor" />
          <circle cx="32" cy="40" r="2.5" fill="currentColor" />
          <path d="M20 18l9 6m15-6-9 6M20 46l9-6m15 6-9-6M32 26v12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Виджеты и меню',
      description: 'Подготавливаю нужные виджеты по необходимости до 3 штук и оформляю обложки меню в едином стиле сообщества.',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
          <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.6" />
          <path d="M32 12c10 0 18 9 18 20s-8 20-18 20-18-9-18-20 8-20 18-20Z" stroke="currentColor" strokeWidth="2.2" transform="rotate(60 32 32)" />
          <path d="M32 12c10 0 18 9 18 20s-8 20-18 20-18-9-18-20 8-20 18-20Z" stroke="currentColor" strokeWidth="2.2" transform="rotate(-60 32 32)" />
          <path d="M32 12c10 0 18 9 18 20s-8 20-18 20-18-9-18-20 8-20 18-20Z" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      ),
    },
  ];

  const cases = [
    {
      title: 'Royal Detailing',
      subtitle: 'Визуал для детейлинга',
      image: '/cases/royal-detailing.jpg',
      result:
        'Разработан яркий премиальный визуал для сообщества: обложка, мобильная подача, карточки услуг и сценарий взаимодействия через чат-бота. В результате страница выглядит цельно, выделяется в нише и помогает быстрее вести клиента к записи.',
    },
    {
      title: 'Éclat Touch',
      subtitle: 'Визуал и чат-бот для студии',
      image: '/cases/eclat-touch.jpg',
      result:
        'Собрана единая визуальная система для студии: обложки, блоки навигации, оформление карточек и структура сообщества. Страница стала понятной для посетителя, аккуратной по подаче и более удобной для записи на услуги.',
    },
    {
      title: 'Foxy',
      subtitle: 'Визуал для школы английского',
      image: '/cases/foxy.png',
      result:
        'Создан дружелюбный и запоминающийся визуал для школы английского: обложка, мобильная подача, карточки разделов и сценарий общения через чат-бота. Оформление удерживает внимание, упрощает навигацию и делает путь к записи более понятным.',
    },
    {
      title: 'Лапа',
      subtitle: 'Визуал для зоомагазина',
      image: '/cases/lapa.png',
      result:
        'Собран цельный визуальный стиль для зоомагазина: брендовая обложка, витрина предложений, мобильные экраны и бот для консультаций. Сообщество выглядит живо и профессионально, а клиенту проще быстро перейти к нужному товару или обращению.',
    },
  ];

  const legalLinks = [
    { label: 'Публичная оферта', href: OFFER_URL },
    { label: 'Политика обработки персональных данных', href: POLICY_URL },
    { label: 'Согласие на обработку персональных данных', href: CONSENT_URL },
  ];

  return (
    <div className="min-h-screen bg-[#050106] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,18,18,0.33),transparent_16%),radial-gradient(circle_at_80%_35%,rgba(255,15,15,0.18),transparent_24%),radial-gradient(circle_at_25%_75%,rgba(255,0,0,0.08),transparent_18%),linear-gradient(180deg,#050106_0%,#09010a_100%)]" />
        <div className="absolute right-[-10rem] top-[5rem] h-[34rem] w-[34rem] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-[8rem] top-[10rem] h-[22rem] w-[22rem] rounded-full border border-red-500/25" />
        <div className="absolute left-[-6rem] top-[30rem] h-[20rem] w-[20rem] rounded-full bg-red-600/10 blur-3xl" />

        <header className="relative mx-auto flex max-w-[1280px] items-center justify-between px-6 pb-6 pt-7 lg:px-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <span className="absolute left-0 top-0 block h-5 w-5 bg-red-600" />
              <span className="absolute right-0 top-4 block h-5 w-5 bg-red-500" />
              <span className="absolute left-4 bottom-0 block h-5 w-5 bg-red-700" />
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-[15px] text-white/85 md:flex">
            <a className="transition hover:text-red-400" href="#home">Главная</a>
            <a className="transition hover:text-red-400" href="#services">Услуги</a>
            <a className="transition hover:text-red-400" href="#cases">Кейсы</a>
            <a className="transition hover:text-red-400" href="#about">Обо мне</a>
            <a className="transition hover:text-red-400" href="#contacts">Контакты</a>
          </nav>

          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-red-500/60 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(255,0,0,0.08)] backdrop-blur-sm transition hover:bg-red-500/10">
            <span className="text-xs">◔</span>
            Связаться
          </a>
        </header>

        <section id="home" className="relative mx-auto grid max-w-[1280px] items-center gap-8 px-6 pb-20 pt-4 lg:grid-cols-[1.02fr_0.98fr] lg:px-16">
          <div className="max-w-[660px] pt-8 lg:pt-16">
            <div className="mb-5 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-red-300">Екатерина Трегубова</div>
            <h1 className="text-[52px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[68px] xl:text-[82px]">
              <span className="block text-white">Визуал VK</span>
              <span className="mt-2 block"><span className="text-red-500">&amp;</span> <span className="text-white">чат-боты</span></span>
            </h1>
            <p className="mt-8 max-w-[580px] text-[20px] leading-[1.5] text-white/75 lg:text-[22px]">
              Оформление сообщества ВКонтакте, которое с первого взгляда цепляет внимание, вызывает доверие и помогает вести клиента к заявке или покупке.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-red-500/80 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-7 py-4 text-[17px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.36)]">
                Связаться в Telegram
                <span className="text-xl">→</span>
              </a>
              <a href={MAX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-[17px] font-medium text-white/90 transition hover:bg-white/[0.08]">
                Связаться в MAX
              </a>
            </div>
            <div className="mt-6 inline-flex items-center rounded-2xl border border-red-500/25 bg-white/[0.03] px-5 py-4 text-base text-white/85 shadow-[0_0_20px_rgba(255,0,0,0.06)]">
              Выполнение от 1 дня
            </div>
          </div>

          <div className="relative min-h-[540px] lg:min-h-[620px]">
            <div className="absolute left-[6%] top-[38%] hidden text-[56px] font-light text-red-500/80 lg:block">+</div>
            <div className="absolute right-[-1rem] top-[4rem] h-[30rem] w-[30rem] rounded-full bg-red-600/35 blur-[80px]" />
            <div className="absolute right-[2rem] top-[6rem] h-[27rem] w-[27rem] rounded-full border border-red-500/20" />
            <div className="absolute right-[-4rem] top-[12rem] h-[18rem] w-[28rem] rotate-[18deg] bg-[radial-gradient(circle_at_30%_50%,rgba(255,30,30,0.8),rgba(255,0,0,0.06)_40%,transparent_60%)] blur-sm" />
            <div className="absolute bottom-[7rem] right-[0rem] h-[16rem] w-[30rem] rounded-[100%] border border-red-500/20" />
            <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
              <div className="relative z-10">
                <div className="absolute inset-x-[20%] top-[8%] h-[65%] rounded-full bg-red-600/20 blur-3xl" />
                <img src={heroPhoto} alt="Екатерина Трегубова" className="relative h-[32rem] w-auto max-w-none object-contain drop-shadow-[0_0_40px_rgba(255,0,0,0.28)] lg:h-[39rem]" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="relative border-t border-red-500/15 bg-[#070108] py-20 lg:py-24">
        <div className="absolute left-[4rem] top-[5rem] hidden grid-cols-4 gap-2 opacity-20 lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-red-500" />
          ))}
        </div>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[42px] font-semibold uppercase tracking-[-0.04em] sm:text-[56px]"><span className="text-red-500">Мои</span> <span className="text-white">услуги</span></h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[18px] leading-[1.65] text-white/55 lg:text-[20px]">Создаю оформление сообществ ВКонтакте и настраиваю чат-ботов так, чтобы визуал цеплял внимание, вызывал доверие и помогал усиливать продажи.</p>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] px-7 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-red-500/30 hover:shadow-[0_0_28px_rgba(255,0,0,0.08)] lg:px-8 lg:py-9">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(255,0,0,0.22),transparent_22%)] opacity-90" />
                <div className="absolute -bottom-12 right-[-2rem] h-40 w-40 rounded-full border border-red-500/20" />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-red-500/70 transition-all duration-300 group-hover:w-full" />
                <div className="relative flex items-start gap-5 lg:gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center text-red-500 drop-shadow-[0_0_14px_rgba(255,0,0,0.4)]">{service.icon}</div>
                  <div className="max-w-[420px]">
                    <h3 className="text-[22px] font-semibold uppercase leading-[1.2] tracking-[-0.03em] text-white">{service.title}</h3>
                    <p className="mt-4 text-[17px] leading-[1.65] text-white/62 lg:text-[18px]">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-[560px] rounded-[24px] border border-red-500/20 bg-[linear-gradient(180deg,rgba(255,0,0,0.07),rgba(255,255,255,0.02))] px-6 py-8 text-center shadow-[0_0_30px_rgba(255,0,0,0.06)]">
              <div className="text-sm uppercase tracking-[0.28em] text-red-400">Стоимость</div>
              <div className="mt-4 text-[40px] font-semibold tracking-[-0.04em] text-white">5000 ₽</div>
              <p className="mt-3 text-[16px] leading-7 text-white/60">Базовая стоимость оформления. Для оплаты перейдите по кнопке ниже.</p>
              <a href={PAYMENT_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-xl border border-red-500/70 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-7 py-4 text-[17px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.34)]">Оплатить</a>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="bg-[#070108] px-6 pb-10 pt-2 lg:px-16 lg:pb-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[42px] font-semibold uppercase tracking-[-0.04em] sm:text-[56px]"><span className="text-red-500">Кейсы</span> <span className="text-white">и результаты</span></h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.65] text-white/55 lg:text-[20px]">Примеры оформления сообществ и настройки чат-ботов, где визуал помогает выделиться, а структура и сценарии общения подводят клиента к записи и покупке.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(255,0,0,0.04)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.35))]" />
                </div>
                <div className="p-6 lg:p-7">
                  <div className="text-sm uppercase tracking-[0.28em] text-red-400">{item.subtitle}</div>
                  <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-4 text-[17px] leading-[1.7] text-white/65">{item.result}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] border border-white/10 bg-white/[0.02] px-6 py-8 text-center shadow-[0_0_30px_rgba(255,0,0,0.04)] lg:px-8">
            <h3 className="text-[30px] font-semibold tracking-[-0.04em] text-white lg:text-[38px]">Обсудить проект</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href={MAX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-[17px] font-medium text-white/90 transition hover:bg-white/[0.08]">Связаться в MAX</a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-red-500/80 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-7 py-4 text-[17px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.36)]">Связаться в Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#070108] px-6 pb-16 pt-4 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[24px] border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <div className="text-sm uppercase tracking-[0.32em] text-red-400">Обо мне</div>
            <h3 className="mt-5 text-[30px] font-semibold leading-[1.12] tracking-[-0.04em] text-white lg:text-[34px]">Екатерина Трегубова</h3>
            <p className="mt-5 max-w-[700px] text-[17px] leading-[1.75] text-white/65 lg:text-[18px]">
              AI-креатор и эксперт по визуальной упаковке брендов во ВКонтакте. Разрабатываю индивидуальный визуал и контент нового уровня с применением передовых AI-технологий и современных креативных решений.
            </p>
            <p className="mt-4 max-w-[700px] text-[17px] leading-[1.75] text-white/65 lg:text-[18px]">
              Сочетаю AI-инструменты, аналитику и индивидуальный подход, чтобы создавать не просто эстетичное оформление, а визуал, который точно работает на задачи бизнеса. Без шаблонов и типовых решений — каждый проект создаётся под задачи и характер бренда.
            </p>
            <p className="mt-4 max-w-[700px] text-[17px] leading-[1.75] text-white/65 lg:text-[18px]">
              Моя задача — сформировать для вашего сообщества сильный, дорогой и узнаваемый образ, который повышает доверие, подчёркивает ценность бренда и работает на привлечение клиентов и продажи.
            </p>
          </div>
          <div className="rounded-[20px] border border-red-500/20 bg-[linear-gradient(180deg,rgba(255,0,0,0.08),rgba(255,255,255,0.02))] p-7">
            <div className="text-[20px] font-medium text-white">Что входит в оформление</div>
            <ul className="mt-5 space-y-3 text-[17px] leading-7 text-white/72">
              <li>• оформление визуала сообщества ВК</li>
              <li>• настройка чат-бота</li>
              <li>• аватар группы</li>
              <li>• обложка группы для ПК и мобильной версии</li>
              <li>• виджеты по необходимости до 3 штук</li>
              <li>• обложки меню</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contacts" className="border-t border-red-500/20 bg-[#050106] px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1280px] rounded-[24px] border border-white/10 bg-white/[0.02] px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-lg font-medium text-white">Екатерина Трегубова</div>
              <p className="mt-1 text-sm text-white/45">Визуал VK, оформление сообществ и чат-боты</p>
              <p className="mt-3 text-sm text-white/55">ИП Екатерина Трегубова</p>
              <p className="mt-1 text-sm text-white/55">ИНН: 246209333740</p>
              <p className="mt-1 text-sm text-white/55">ОГРНИП: 325246800112293</p>
              <p className="mt-1 text-sm text-white/55">Время ответа: с 9:00 до 18:00 по Красноярскому времени (+4 МСК)</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-red-500/30 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/10">Telegram</a>
              <a href={MAX_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">MAX</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/45">
            <div>© {new Date().getFullYear()} Екатерина Трегубова. Все права защищены.</div>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-white">{item.label}</a>
              ))}
            </div>
            <p className="max-w-[880px] leading-6 text-white/45">
              Нажимая на кнопки «Связаться» или «Оплатить», вы подтверждаете согласие на обработку персональных данных и принимаете условия публичной оферты.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
