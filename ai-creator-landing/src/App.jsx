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
        <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
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
        <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
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
        <div className="absolute right-[-8rem] top-[2rem] h-[18rem] w-[18rem] rounded-full bg-red-600/20 blur-3xl sm:right-[-10rem] sm:top-[5rem] sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute right-[2rem] top-[7rem] h-[12rem] w-[12rem] rounded-full border border-red-500/20 sm:right-[8rem] sm:top-[10rem] sm:h-[22rem] sm:w-[22rem] sm:border-red-500/25" />

        <header className="relative mx-auto flex max-w-[1280px] items-center justify-between px-4 pb-5 pt-5 sm:px-6 lg:px-16 lg:pb-6 lg:pt-7">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10">
              <span className="absolute left-0 top-0 block h-4 w-4 bg-red-600 sm:h-5 sm:w-5" />
              <span className="absolute right-0 top-3 block h-4 w-4 bg-red-500 sm:top-4 sm:h-5 sm:w-5" />
              <span className="absolute bottom-0 left-3 block h-4 w-4 bg-red-700 sm:left-4 sm:h-5 sm:w-5" />
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[15px] text-white/85 lg:flex">
            <a className="transition hover:text-red-400" href="#home">Главная</a>
            <a className="transition hover:text-red-400" href="#services">Услуги</a>
            <a className="transition hover:text-red-400" href="#cases">Кейсы</a>
            <a className="transition hover:text-red-400" href="#about">Обо мне</a>
            <a className="transition hover:text-red-400" href="#contacts">Контакты</a>
          </nav>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-red-500/60 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white shadow-[0_0_20px_rgba(255,0,0,0.08)] backdrop-blur-sm transition hover:bg-red-500/10 sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="text-[10px] sm:text-xs">◔</span>
            Связаться
          </a>
        </header>

        <section id="home" className="relative mx-auto grid max-w-[1280px] items-center gap-6 px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-16 lg:pb-20 lg:pt-4">
          <div className="order-2 max-w-[660px] lg:order-1 lg:pt-16">
            <div className="mb-4 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-red-300 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Екатерина Трегубова
            </div>

            <h1 className="text-[40px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[56px] lg:text-[68px] xl:text-[82px]">
              <span className="block text-white">Визуал VK</span>
              <span className="mt-2 block"><span className="text-red-500">&amp;</span> <span className="text-white">чат-боты</span></span>
            </h1>

            <p className="mt-6 max-w-[580px] text-[17px] leading-[1.55] text-white/75 sm:mt-8 sm:text-[20px] lg:text-[22px]">
              Оформление сообщества ВКонтакте, которое с первого взгляда цепляет внимание, вызывает доверие и помогает вести клиента к заявке или покупке.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/80 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-6 py-4 text-[16px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.36)] sm:w-auto sm:px-7 sm:text-[17px]"
              >
                Связаться в Telegram
                <span className="text-xl">→</span>
              </a>

              <a
                href={MAX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-[16px] font-medium text-white/90 transition hover:bg-white/[0.08] sm:w-auto sm:px-7 sm:text-[17px]"
              >
                Связаться в MAX
              </a>
            </div>

            <div className="mt-5 inline-flex items-center rounded-2xl border border-red-500/25 bg-white/[0.03] px-4 py-3 text-sm text-white/85 shadow-[0_0_20px_rgba(255,0,0,0.06)] sm:mt-6 sm:px-5 sm:py-4 sm:text-base">
              Выполнение от 1 дня
            </div>
          </div>

          <div className="order-1 relative min-h-[360px] sm:min-h-[480px] lg:order-2 lg:min-h-[620px]">
            <div className="absolute right-[-1rem] top-[2rem] h-[16rem] w-[16rem] rounded-full bg-red-600/35 blur-[70px] sm:top-[4rem] sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]" />
            <div className="absolute right-[1rem] top-[3rem] h-[15rem] w-[15rem] rounded-full border border-red-500/20 sm:right-[2rem] sm:top-[5rem] sm:h-[22rem] sm:w-[22rem] lg:h-[27rem] lg:w-[27rem]" />
            <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
              <div className="relative z-10">
                <div className="absolute inset-x-[22%] top-[10%] h-[65%] rounded-full bg-red-600/20 blur-3xl" />
                <img
                  src={heroPhoto}
                  alt="Екатерина Трегубова"
                  className="relative h-[22rem] w-auto max-w-none object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.22)] sm:h-[30rem] lg:h-[39rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="relative border-t border-red-500/15 bg-[#070108] py-14 sm:py-16 lg:py-24">
        <div className="absolute left-[4rem] top-[5rem] hidden grid-cols-4 gap-2 opacity-20 lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-red-500" />
          ))}
        </div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold uppercase tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
              <span className="text-red-500">Мои</span> <span className="text-white">услуги</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.65] text-white/55 sm:mt-7 sm:text-[18px] lg:text-[20px]">
              Создаю оформление сообществ ВКонтакте и настраиваю чат-ботов так, чтобы визуал цеплял внимание, вызывал доверие и помогал усиливать продажи.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-7">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] px-5 py-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-red-500/30 hover:shadow-[0_0_28px_rgba(255,0,0,0.08)] sm:px-6 sm:py-7 lg:px-8 lg:py-9"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(255,0,0,0.22),transparent_22%)] opacity-90" />
                <div className="absolute -bottom-12 right-[-2rem] h-40 w-40 rounded-full border border-red-500/20" />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-red-500/70 transition-all duration-300 group-hover:w-full" />

                <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:gap-5 lg:gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center text-red-500 drop-shadow-[0_0_14px_rgba(255,0,0,0.4)] sm:h-20 sm:w-20">
                    {service.icon}
                  </div>
                  <div className="max-w-[420px]">
                    <h3 className="text-[20px] font-semibold uppercase leading-[1.2] tracking-[-0.03em] text-white sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.65] text-white/62 sm:mt-4 sm:text-[17px] lg:text-[18px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <div className="w-full max-w-[560px] rounded-[24px] border border-red-500/20 bg-[linear-gradient(180deg,rgba(255,0,0,0.07),rgba(255,255,255,0.02))] px-5 py-7 text-center shadow-[0_0_30px_rgba(255,0,0,0.06)] sm:px-6 sm:py-8">
              <div className="text-xs uppercase tracking-[0.28em] text-red-400 sm:text-sm">Стоимость</div>
              <div className="mt-3 text-[34px] font-semibold tracking-[-0.04em] text-white sm:mt-4 sm:text-[40px]">5000 ₽</div>
              <p className="mt-3 text-[15px] leading-7 text-white/60 sm:text-[16px]">
                Базовая стоимость оформления. Для оплаты перейдите по кнопке ниже.
              </p>
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-red-500/70 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-7 py-4 text-[17px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.34)] sm:w-auto"
              >
                Оплатить
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="bg-[#070108] px-4 pb-10 pt-2 sm:px-6 lg:px-16 lg:pb-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold uppercase tracking-[-0.04em] sm:text-[42px] lg:text-[56px]">
              <span className="text-red-500">Кейсы</span> <span className="text-white">и результаты</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.65] text-white/55 sm:mt-6 sm:text-[18px] lg:text-[20px]">
              Примеры оформления сообществ и настройки чат-ботов, где визуал помогает выделиться, а структура и сценарии общения подводят клиента к записи и покупке.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:mt-14">
            {cases.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(255,0,0,0.04)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.35))]" />
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="text-xs uppercase tracking-[0.24em] text-red-400 sm:text-sm sm:tracking-[0.28em]">{item.subtitle}</div>
                  <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">{item.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-white/65 sm:text-[17px]">{item.result}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.02] px-5 py-7 text-center shadow-[0_0_30px_rgba(255,0,0,0.04)] sm:mt-12 sm:px-6 sm:py-8 lg:px-8">
            <h3 className="text-[28px] font-semibold tracking-[-0.04em] text-white sm:text-[30px] lg:text-[38px]">Обсудить проект</h3>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a href={MAX_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-[16px] font-medium text-white/90 transition hover:bg-white/[0.08] sm:w-auto sm:text-[17px]">Связаться в MAX</a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/80 bg-[linear-gradient(90deg,rgba(255,35,35,0.95),rgba(86,6,14,0.9))] px-7 py-4 text-[16px] font-medium text-white shadow-[0_0_24px_rgba(255,0,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,0,0.36)] sm:w-auto sm:text-[17px]">Связаться в Telegram</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#070108] px-4 pb-16 pt-4 sm:px-6 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 rounded-[24px] border border-white/10 bg-white/[0.02] p-5 sm:gap-8 sm:p-7 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-red-400 sm:text-sm sm:tracking-[0.32em]">Обо мне</div>
            <h3 className="mt-4 text-[28px] font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:mt-5 sm:text-[30px] lg:text-[34px]">Екатерина Трегубова</h3>
            <p className="mt-4 max-w-[700px] text-[16px] leading-[1.75] text-white/65 sm:mt-5 sm:text-[17px] lg:text-[18px]">
              AI-креатор и эксперт по визуальной упаковке брендов во ВКонтакте. Разрабатываю индивидуальный визуал и контент нового уровня с применением передовых AI-технологий и современных креативных решений.
            </p>
            <p className="mt-4 max-w-[700px] text-[16px] leading-[1.75] text-white/65 sm:text-[17px] lg:text-[18px]">
              Сочетаю AI-инструменты, аналитику и индивидуальный подход, чтобы создавать не просто эстетичное оформление, а визуал, который точно работает на задачи бизнеса. Без шаблонов и типовых решений — каждый проект создаётся под задачи и характер бренда.
            </p>
            <p className="mt-4 max-w-[700px] text-[16px] leading-[1.75] text-white/65 sm:text-[17px] lg:text-[18px]">
              Моя задача — сформировать для вашего сообщества сильный, дорогой и узнаваемый образ, который повышает доверие, подчёркивает ценность бренда и работает на привлечение клиентов и продажи.
            </p>
          </div>

          <div className="rounded-[20px] border border-red-500/20 bg-[linear-gradient(180deg,rgba(255,0,0,0.08),rgba(255,255,255,0.02))] p-5 sm:p-7">
            <div className="text-[19px] font-medium text-white sm:text-[20px]">Что входит в оформление</div>
            <ul className="mt-4 space-y-3 text-[16px] leading-7 text-white/72 sm:mt-5 sm:text-[17px]">
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

      <footer id="contacts" className="border-t border-red-500/20 bg-[#050106] px-4 py-8 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-[1280px] rounded-[24px] border border-white/10 bg-white/[0.02] px-5 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-lg font-medium text-white">Екатерина Трегубова</div>
              <p className="mt-1 text-sm text-white/45">Визуал VK, оформление сообществ и чат-боты</p>
              <p className="mt-3 text-sm text-white/55">ИП Екатерина Трегубова</p>
              <p className="mt-1 text-sm text-white/55">ИНН: 246209333740</p>
              <p className="mt-1 text-sm text-white/55">ОГРНИП: 325246800112293</p>
              <p className="mt-1 text-sm text-white/55">Время ответа: с 9:00 до 18:00 по Красноярскому времени (+4 МСК)</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-red-500/30 px-4 py-2 text-center text-sm text-red-300 transition hover:bg-red-500/10">Telegram</a>
              <a href={MAX_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-4 py-2 text-center text-sm text-white/70 transition hover:bg-white/5 hover:text-white">MAX</a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/45">
            <div>© {new Date().getFullYear()} Екатерина Трегубова. Все права защищены.</div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
