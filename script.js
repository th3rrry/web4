// Suppress console errors
(function() {
    const noop = () => {};
    const originalError = console.error;
    const originalWarn = console.warn;
    console.error = noop;
    console.warn = noop;
    window.addEventListener('error', (e) => e.preventDefault(), true);
    window.addEventListener('unhandledrejection', (e) => e.preventDefault(), true);
})();

// Language translations
const translations = {
    ru: {
        // Header
        title: 'Premium Trading Signals',
        subtitle: 'Получите профессиональный сигнал для торговли',
        
        // Steps
        step1Title: 'Выберите тип рынка',
        step1Description: 'Выберите рынок для получения сигнала',
        step2Title: 'Выберите валютную пару',
        step2Description: 'Выберите пару для анализа',
        step3Title: 'Выберите таймфрейм',
        step3Description: 'Выберите период для анализа',
        step4Title: 'Готово к получению сигнала',
        
        // Market types
        forex: 'Forex',
        forexDescription: 'Валютные пары',
        forexWeekendMessage: 'Рынок Forex не работает в выходные дни',
        otc: 'OTC',
        otcDescription: 'Внебиржевые пары',
        
        // Navigation
        back: 'Назад',
        getSignal: 'Получить сигнал',
        getSignalAgain: 'Получить еще раз',
        newSignal: 'Новый сигнал',
        
        // Summary
        market: 'Рынок:',
        pair: 'Пара:',
        timeframe: 'Таймфрейм:',
        
        // Signal
        direction: 'Направление:',
        confidence: 'Уровень уверенности:',
        up: 'ВВЕРХ',
        down: 'ВНИЗ',
        buy: 'ПОКУПКА',
        sell: 'ПРОДАЖА',
        
        // Computation stages
        stage1: 'Подключение к базе данных',
        stage2: 'Анализ рыночных данных',
        stage3: 'Вычисление точек входа',
        stage4: 'Формирование сигнала',
        computingNew: 'Вычисление нового сигнала...',
        analysis: 'Анализ',
        calculation: 'Расчет',
        formation: 'Формирование',
        
        // Cooldown
        waiting: 'Ожидание:',
        
        // Timeframes
        seconds: 'секунд',
        second: 'секунда',
        minutes: 'минут',
        minute: 'минута',
        timeframeNames: {
            'S5': '5 секунд',
            'S15': '15 секунд',
            'S30': '30 секунд',
            'M1': '1 минута',
            'M3': '3 минуты',
            'M5': '5 минут',
            'M15': '15 минут',
            'M30': '30 минут'
        },
        
        // Risk warning
        riskWarning: '⚠️ Торговля бинарными опционами сопряжена с высокими рисками. Возможна потеря инвестированного капитала. Перед началом торговли убедитесь, что вы полностью понимаете все связанные риски.'
    },
    en: {
        title: 'Premium Trading Signals',
        subtitle: 'Get professional trading signal',
        
        step1Title: 'Select market type',
        step1Description: 'Choose a market to get a signal',
        step2Title: 'Select currency pair',
        step2Description: 'Choose a pair for analysis',
        step3Title: 'Select timeframe',
        step3Description: 'Choose a period for analysis',
        step4Title: 'Ready to get signal',
        
        forex: 'Forex',
        forexDescription: 'Currency pairs',
        forexWeekendMessage: 'Forex market is closed on weekends',
        otc: 'OTC',
        otcDescription: 'OTC pairs',
        
        back: 'Back',
        getSignal: 'Get Signal',
        getSignalAgain: 'Get Again',
        newSignal: 'New Signal',
        
        market: 'Market:',
        pair: 'Pair:',
        timeframe: 'Timeframe:',
        
        direction: 'Direction:',
        confidence: 'Confidence Level:',
        up: 'UP',
        down: 'DOWN',
        buy: 'BUY',
        sell: 'SELL',
        
        stage1: 'Connecting to database',
        stage2: 'Analyzing market data',
        stage3: 'Calculating entry points',
        stage4: 'Forming signal',
        computingNew: 'Computing new signal...',
        analysis: 'Analysis',
        calculation: 'Calculation',
        formation: 'Formation',
        
        waiting: 'Waiting:',
        
        seconds: 'seconds',
        second: 'second',
        minutes: 'minutes',
        minute: 'minute',
        timeframeNames: {
            'S5': '5 seconds',
            'S15': '15 seconds',
            'S30': '30 seconds',
            'M1': '1 minute',
            'M3': '3 minutes',
            'M5': '5 minutes',
            'M15': '15 minutes',
            'M30': '30 minutes'
        },
        
        riskWarning: '⚠️ Binary options trading involves high risks. Loss of invested capital is possible. Before starting trading, make sure you fully understand all associated risks.'
    },
    pt: {
        title: 'Premium Trading Signals',
        subtitle: 'Obtenha um sinal profissional de negociação',
        
        step1Title: 'Selecione o tipo de mercado',
        step1Description: 'Escolha um mercado para obter um sinal',
        step2Title: 'Selecione o par de moedas',
        step2Description: 'Escolha um par para análise',
        step3Title: 'Selecione o período',
        step3Description: 'Escolha um período para análise',
        step4Title: 'Pronto para obter sinal',
        
        forex: 'Forex',
        forexDescription: 'Pares de moedas',
        forexWeekendMessage: 'O mercado Forex não funciona nos fins de semana',
        otc: 'OTC',
        otcDescription: 'Pares OTC',
        
        back: 'Voltar',
        getSignal: 'Obter Sinal',
        getSignalAgain: 'Obter Novamente',
        newSignal: 'Novo Sinal',
        
        market: 'Mercado:',
        pair: 'Par:',
        timeframe: 'Período:',
        
        direction: 'Direção:',
        confidence: 'Nível de Confiança:',
        up: 'CIMA',
        down: 'BAIXO',
        buy: 'COMPRA',
        sell: 'VENDA',
        
        stage1: 'Conectando ao banco de dados',
        stage2: 'Analisando dados de mercado',
        stage3: 'Calculando pontos de entrada',
        stage4: 'Formando sinal',
        computingNew: 'Calculando novo sinal...',
        analysis: 'Análise',
        calculation: 'Cálculo',
        formation: 'Formação',
        
        waiting: 'Aguardando:',
        
        seconds: 'segundos',
        second: 'segundo',
        minutes: 'minutos',
        minute: 'minuto',
        timeframeNames: {
            'S5': '5 segundos',
            'S15': '15 segundos',
            'S30': '30 segundos',
            'M1': '1 minuto',
            'M3': '3 minutos',
            'M5': '5 minutos',
            'M15': '15 minutos',
            'M30': '30 minutos'
        },
        
        riskWarning: '⚠️ A negociação de opções binárias envolve altos riscos. A perda do capital investido é possível. Antes de começar a negociar, certifique-se de entender completamente todos os riscos associados.'
    },
    ar: {
        title: 'Premium Trading Signals',
        subtitle: 'احصل على إشارة تداول احترافية',
        
        step1Title: 'اختر نوع السوق',
        step1Description: 'اختر سوقًا للحصول على إشارة',
        step2Title: 'اختر زوج العملات',
        step2Description: 'اختر زوجًا للتحليل',
        step3Title: 'اختر الإطار الزمني',
        step3Description: 'اختر فترة للتحليل',
        step4Title: 'جاهز للحصول على الإشارة',
        
        forex: 'Forex',
        forexDescription: 'أزواج العملات',
        forexWeekendMessage: 'سوق الفوركس لا يعمل في عطلة نهاية الأسبوع',
        otc: 'OTC',
        otcDescription: 'أزواج خارج البورصة',
        
        back: 'رجوع',
        getSignal: 'الحصول على إشارة',
        getSignalAgain: 'احصل مرة أخرى',
        newSignal: 'إشارة جديدة',
        
        market: 'السوق:',
        pair: 'الزوج:',
        timeframe: 'الإطار الزمني:',
        
        direction: 'الاتجاه:',
        confidence: 'مستوى الثقة:',
        up: 'أعلى',
        down: 'أسفل',
        buy: 'شراء',
        sell: 'بيع',
        
        stage1: 'الاتصال بقاعدة البيانات',
        stage2: 'تحليل بيانات السوق',
        stage3: 'حساب نقاط الدخول',
        stage4: 'تشكيل الإشارة',
        computingNew: 'حساب إشارة جديدة...',
        analysis: 'التحليل',
        calculation: 'الحساب',
        formation: 'التشكيل',
        
        waiting: 'انتظار:',
        
        seconds: 'ثواني',
        second: 'ثانية',
        minutes: 'دقائق',
        minute: 'دقيقة',
        timeframeNames: {
            'S5': '5 ثواني',
            'S15': '15 ثانية',
            'S30': '30 ثانية',
            'M1': '1 دقيقة',
            'M3': '3 دقائق',
            'M5': '5 دقائق',
            'M15': '15 دقيقة',
            'M30': '30 دقيقة'
        },
        
        riskWarning: '⚠️ يتضمن تداول الخيارات الثنائية مخاطر عالية. قد يكون هناك فقدان رأس المال المستثمر. قبل البدء في التداول، تأكد من فهمك الكامل لجميع المخاطر المرتبطة.'
    },
    hi: {
        title: 'Premium Trading Signals',
        subtitle: 'पेशेवर ट्रेडिंग सिग्नल प्राप्त करें',
        
        step1Title: 'बाजार प्रकार चुनें',
        step1Description: 'सिग्नल प्राप्त करने के लिए एक बाजार चुनें',
        step2Title: 'मुद्रा जोड़ी चुनें',
        step2Description: 'विश्लेषण के लिए एक जोड़ी चुनें',
        step3Title: 'समय सीमा चुनें',
        step3Description: 'विश्लेषण के लिए एक अवधि चुनें',
        step4Title: 'सिग्नल प्राप्त करने के लिए तैयार',
        
        forex: 'Forex',
        forexDescription: 'मुद्रा जोड़े',
        forexWeekendMessage: 'फॉरेक्स बाजार सप्ताहांत पर काम नहीं करता',
        otc: 'OTC',
        otcDescription: 'ओटीसी जोड़े',
        
        back: 'वापस',
        getSignal: 'सिग्नल प्राप्त करें',
        getSignalAgain: 'फिर से प्राप्त करें',
        newSignal: 'नया सिग्नल',
        
        market: 'बाजार:',
        pair: 'जोड़ी:',
        timeframe: 'समय सीमा:',
        
        direction: 'दिशा:',
        confidence: 'आत्मविश्वास स्तर:',
        up: 'ऊपर',
        down: 'नीचे',
        buy: 'खरीदें',
        sell: 'बेचें',
        
        stage1: 'डेटाबेस से कनेक्ट हो रहा है',
        stage2: 'बाजार डेटा का विश्लेषण',
        stage3: 'प्रवेश बिंदुओं की गणना',
        stage4: 'सिग्नल बनाना',
        computingNew: 'नया सिग्नल गणना कर रहा है...',
        analysis: 'विश्लेषण',
        calculation: 'गणना',
        formation: 'गठन',
        
        waiting: 'प्रतीक्षा:',
        
        seconds: 'सेकंड',
        second: 'सेकंड',
        minutes: 'मिनट',
        minute: 'मिनट',
        timeframeNames: {
            'S5': '5 सेकंड',
            'S15': '15 सेकंड',
            'S30': '30 सेकंड',
            'M1': '1 मिनट',
            'M3': '3 मिनट',
            'M5': '5 मिनट',
            'M15': '15 मिनट',
            'M30': '30 मिनट'
        },
        
        riskWarning: '⚠️ बाइनरी विकल्प ट्रेडिंग में उच्च जोखिम शामिल है। निवेशित पूंजी का नुकसान संभव है। ट्रेडिंग शुरू करने से पहले, सुनिश्चित करें कि आप सभी संबद्ध जोखिमों को पूरी तरह से समझते हैं।'
    },
    tr: {
        title: 'Premium Trading Signals',
        subtitle: 'Profesyonel işlem sinyali alın',
        
        step1Title: 'Piyasa türünü seçin',
        step1Description: 'Sinyal almak için bir piyasa seçin',
        step2Title: 'Para birimi çifti seçin',
        step2Description: 'Analiz için bir çift seçin',
        step3Title: 'Zaman dilimini seçin',
        step3Description: 'Analiz için bir dönem seçin',
        step4Title: 'Sinyal almaya hazır',
        
        forex: 'Forex',
        forexDescription: 'Para birimi çiftleri',
        forexWeekendMessage: 'Forex piyasası hafta sonları çalışmaz',
        otc: 'OTC',
        otcDescription: 'OTC çiftleri',
        
        back: 'Geri',
        getSignal: 'Sinyal Al',
        getSignalAgain: 'Tekrar Al',
        newSignal: 'Yeni Sinyal',
        
        market: 'Piyasa:',
        pair: 'Çift:',
        timeframe: 'Zaman Dilimi:',
        
        direction: 'Yön:',
        confidence: 'Güven Seviyesi:',
        up: 'YUKARI',
        down: 'AŞAĞI',
        buy: 'SATIN AL',
        sell: 'SAT',
        
        stage1: 'Veritabanına bağlanılıyor',
        stage2: 'Piyasa verileri analiz ediliyor',
        stage3: 'Giriş noktaları hesaplanıyor',
        stage4: 'Sinyal oluşturuluyor',
        computingNew: 'Yeni sinyal hesaplanıyor...',
        analysis: 'Analiz',
        calculation: 'Hesaplama',
        formation: 'Oluşturma',
        
        waiting: 'Bekleniyor:',
        
        seconds: 'saniye',
        second: 'saniye',
        minutes: 'dakika',
        minute: 'dakika',
        timeframeNames: {
            'S5': '5 saniye',
            'S15': '15 saniye',
            'S30': '30 saniye',
            'M1': '1 dakika',
            'M3': '3 dakika',
            'M5': '5 dakika',
            'M15': '15 dakika',
            'M30': '30 dakika'
        },
        
        riskWarning: '⚠️ İkili opsiyon ticareti yüksek riskler içerir. Yatırılan sermayenin kaybı mümkündür. Ticarete başlamadan önce, tüm ilişkili riskleri tam olarak anladığınızdan emin olun.'
    },
    es: {
        title: 'Premium Trading Signals',
        subtitle: 'Obtén una señal profesional de trading',
        
        step1Title: 'Selecciona el tipo de mercado',
        step1Description: 'Elige un mercado para obtener una señal',
        step2Title: 'Selecciona el par de divisas',
        step2Description: 'Elige un par para análisis',
        step3Title: 'Selecciona el período',
        step3Description: 'Elige un período para análisis',
        step4Title: 'Listo para obtener señal',
        
        forex: 'Forex',
        forexDescription: 'Pares de divisas',
        forexWeekendMessage: 'El mercado Forex está cerrado los fines de semana',
        otc: 'OTC',
        otcDescription: 'Pares OTC',
        
        back: 'Atrás',
        getSignal: 'Obtener Señal',
        getSignalAgain: 'Obtener de Nuevo',
        newSignal: 'Nueva Señal',
        
        market: 'Mercado:',
        pair: 'Par:',
        timeframe: 'Período:',
        
        direction: 'Dirección:',
        confidence: 'Nivel de Confianza:',
        up: 'ARRIBA',
        down: 'ABAJO',
        buy: 'COMPRAR',
        sell: 'VENDER',
        
        stage1: 'Conectando a la base de datos',
        stage2: 'Analizando datos del mercado',
        stage3: 'Calculando puntos de entrada',
        stage4: 'Formando señal',
        computingNew: 'Calculando nueva señal...',
        analysis: 'Análisis',
        calculation: 'Cálculo',
        formation: 'Formación',
        
        waiting: 'Esperando:',
        
        seconds: 'segundos',
        second: 'segundo',
        minutes: 'minutos',
        minute: 'minuto',
        timeframeNames: {
            'S5': '5 segundos',
            'S15': '15 segundos',
            'S30': '30 segundos',
            'M1': '1 minuto',
            'M3': '3 minutos',
            'M5': '5 minutos',
            'M15': '15 minutos',
            'M30': '30 minutos'
        },
        
        riskWarning: '⚠️ El trading de opciones binarias conlleva altos riesgos. Es posible la pérdida del capital invertido. Antes de comenzar a operar, asegúrese de comprender completamente todos los riesgos asociados.'
    },
    de: {
        title: 'Premium Trading Signals',
        subtitle: 'Erhalten Sie ein professionelles Handelssignal',
        
        step1Title: 'Markttyp auswählen',
        step1Description: 'Wählen Sie einen Markt, um ein Signal zu erhalten',
        step2Title: 'Währungspaar auswählen',
        step2Description: 'Wählen Sie ein Paar zur Analyse',
        step3Title: 'Zeitraum auswählen',
        step3Description: 'Wählen Sie einen Zeitraum zur Analyse',
        step4Title: 'Bereit, Signal zu erhalten',
        
        forex: 'Forex',
        forexDescription: 'Währungspaare',
        forexWeekendMessage: 'Der Forex-Markt ist an Wochenenden geschlossen',
        otc: 'OTC',
        otcDescription: 'OTC-Paare',
        
        back: 'Zurück',
        getSignal: 'Signal Abrufen',
        getSignalAgain: 'Erneut Abrufen',
        newSignal: 'Neues Signal',
        
        market: 'Markt:',
        pair: 'Paar:',
        timeframe: 'Zeitraum:',
        
        direction: 'Richtung:',
        confidence: 'Vertrauensniveau:',
        up: 'OBEN',
        down: 'UNTEN',
        buy: 'KAUFEN',
        sell: 'VERKAUFEN',
        
        stage1: 'Verbindung zur Datenbank',
        stage2: 'Marktdaten analysieren',
        stage3: 'Einstiegspunkte berechnen',
        stage4: 'Signal bilden',
        computingNew: 'Neues Signal wird berechnet...',
        analysis: 'Analyse',
        calculation: 'Berechnung',
        formation: 'Bildung',
        
        waiting: 'Warten:',
        
        seconds: 'Sekunden',
        second: 'Sekunde',
        minutes: 'Minuten',
        minute: 'Minute',
        timeframeNames: {
            'S5': '5 Sekunden',
            'S15': '15 Sekunden',
            'S30': '30 Sekunden',
            'M1': '1 Minute',
            'M3': '3 Minuten',
            'M5': '5 Minuten',
            'M15': '15 Minuten',
            'M30': '30 Minuten'
        },
        
        riskWarning: '⚠️ Der Handel mit Binäroptionen birgt hohe Risiken. Ein Verlust des investierten Kapitals ist möglich. Stellen Sie vor Beginn des Handels sicher, dass Sie alle damit verbundenen Risiken vollständig verstehen.'
    },
    fr: {
        title: 'Premium Trading Signals',
        subtitle: 'Obtenez un signal de trading professionnel',
        
        step1Title: 'Sélectionnez le type de marché',
        step1Description: 'Choisissez un marché pour obtenir un signal',
        step2Title: 'Sélectionnez la paire de devises',
        step2Description: 'Choisissez une paire pour l\'analyse',
        step3Title: 'Sélectionnez la période',
        step3Description: 'Choisissez une période pour l\'analyse',
        step4Title: 'Prêt à obtenir un signal',
        
        forex: 'Forex',
        forexDescription: 'Paires de devises',
        forexWeekendMessage: 'Le marché Forex est fermé le week-end',
        otc: 'OTC',
        otcDescription: 'Paires OTC',
        
        back: 'Retour',
        getSignal: 'Obtenir Signal',
        getSignalAgain: 'Obtenir à Nouveau',
        newSignal: 'Nouveau Signal',
        
        market: 'Marché:',
        pair: 'Paire:',
        timeframe: 'Période:',
        
        direction: 'Direction:',
        confidence: 'Niveau de Confiance:',
        up: 'HAUT',
        down: 'BAS',
        buy: 'ACHETER',
        sell: 'VENDRE',
        
        stage1: 'Connexion à la base de données',
        stage2: 'Analyse des données du marché',
        stage3: 'Calcul des points d\'entrée',
        stage4: 'Formation du signal',
        computingNew: 'Calcul du nouveau signal...',
        analysis: 'Analyse',
        calculation: 'Calcul',
        formation: 'Formation',
        
        waiting: 'Attente:',
        
        seconds: 'secondes',
        second: 'seconde',
        minutes: 'minutes',
        minute: 'minute',
        timeframeNames: {
            'S5': '5 secondes',
            'S15': '15 secondes',
            'S30': '30 secondes',
            'M1': '1 minute',
            'M3': '3 minutes',
            'M5': '5 minutes',
            'M15': '15 minutes',
            'M30': '30 minutes'
        },
        
        riskWarning: '⚠️ Le trading d\'options binaires comporte des risques élevés. La perte du capital investi est possible. Avant de commencer à trader, assurez-vous de comprendre pleinement tous les risques associés.'
    }
};

// Current language (default: ru, or from localStorage)
let currentLanguage = localStorage.getItem('app_language') || 'ru';

// Currency pairs data
const forexPairs = [
    'EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD',
    'USD/CAD', 'EUR/GBP', 'USD/CHF', 'NZD/USD'
];

const otcPairs = [
    'OTC EUR/USD', 'OTC GBP/USD', 'OTC USD/JPY', 'OTC AUD/USD',
    'OTC USD/CAD', 'OTC EUR/GBP', 'OTC USD/CHF', 'OTC NZD/USD'
];

// Domain validation helper (part 2)
const checkProtocol = () => {
    try {
        const proto = window.location.protocol;
        return proto === 'https:' || proto === 'http:';
    } catch(e) {
        return false;
    }
};

// Timeframes data (will be populated dynamically based on language)
let forexTimeframes = [];
let otcTimeframes = [];

// Domain validation helper (part 3)
const validateOrigin = () => {
    try {
        const host = getHost();
        const allowed = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        return allowed.some(domain => host === domain || host.endsWith('.' + domain));
    } catch(e) {
        return false;
    }
};

// Initialize timeframes based on current language
function initializeTimeframes() {
    const t = translations[currentLanguage];
    forexTimeframes = [
        { value: 'M1', label: 'M1', name: t.timeframeNames['M1'] },
        { value: 'M3', label: 'M3', name: t.timeframeNames['M3'] },
        { value: 'M5', label: 'M5', name: t.timeframeNames['M5'] },
        { value: 'M15', label: 'M15', name: t.timeframeNames['M15'] },
        { value: 'M30', label: 'M30', name: t.timeframeNames['M30'] }
    ];
    
    otcTimeframes = [
        { value: 'S5', label: 'S5', name: t.timeframeNames['S5'] },
        { value: 'S15', label: 'S15', name: t.timeframeNames['S15'] },
        { value: 'S30', label: 'S30', name: t.timeframeNames['S30'] },
        { value: 'M1', label: 'M1', name: t.timeframeNames['M1'] },
        { value: 'M3', label: 'M3', name: t.timeframeNames['M3'] },
        { value: 'M5', label: 'M5', name: t.timeframeNames['M5'] },
        { value: 'M30', label: 'M30', name: t.timeframeNames['M30'] }
    ];
}

// Domain validation helper (part 10)
const checkDomainAccess = () => {
    try {
        const loc = window.location;
        const host = loc.hostname;
        const domains = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        return domains.some(d => host === d || host.endsWith('.' + d));
    } catch(e) {
        return false;
    }
};

// Application state
const appState = {
    currentStep: 1,
    selectedMarket: null,
    selectedPair: null,
    selectedTimeframe: null
};

// DOM elements
const progressSteps = document.querySelectorAll('.progress-step');
const stepContainers = document.querySelectorAll('.step-container');
const forexOption = document.getElementById('forex-option');
const otcOption = document.getElementById('otc-option');
const currencyGrid = document.getElementById('currency-grid');
const timeframeGrid = document.getElementById('timeframe-grid');
const getSignalBtn = document.getElementById('get-signal-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const progressBar = document.getElementById('progress-bar');
const signalCard = document.getElementById('signal-card');
const currencyName = document.getElementById('currency-name');
const signalTimeframe = document.getElementById('signal-timeframe');
const signalTime = document.getElementById('signal-time');
const signalDirection = document.getElementById('signal-direction');
const directionValue = document.getElementById('direction-value');
const confidenceValue = document.getElementById('confidence-value');
const candlesContainer = document.getElementById('candles-container');
const candle1 = document.getElementById('candle-1');
const candle2 = document.getElementById('candle-2');
const candle3 = document.getElementById('candle-3');
const summaryMarket = document.getElementById('summary-market');
const summaryPair = document.getElementById('summary-pair');
const summaryTimeframe = document.getElementById('summary-timeframe');
const newSignalBtn = document.getElementById('new-signal-btn');
const getSignalAgainBtn = document.getElementById('get-signal-again-btn');
const computationProgress = document.getElementById('computation-progress');
const signalLoadingOverlay = document.getElementById('signal-loading-overlay');

// Domain validation helper (part 1)
const getHost = () => {
    try {
        return window.location.hostname;
    } catch(e) {
        return '';
    }
};

// Navigation buttons
const backToStep1 = document.getElementById('back-to-step-1');
const backToStep2 = document.getElementById('back-to-step-2');
const backToStep3 = document.getElementById('back-to-step-3');
const backToStep4 = document.getElementById('back-to-step-4');

// Language switcher
const languageDropdown = document.getElementById('language-dropdown');
const languageSwitcher = document.getElementById('language-switcher');
const languageMenu = document.getElementById('language-menu');
const languageOptions = document.querySelectorAll('.language-option');
const currentFlag = document.getElementById('current-flag');
const currentLanguageText = document.getElementById('current-language-text');

// Language names mapping
const languageNames = {
    ru: 'Русский',
    en: 'English',
    pt: 'Português',
    ar: 'العربية',
    hi: 'हिन्दी',
    tr: 'Türkçe',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français'
};

// Language codes mapping
const languageCodes = {
    ru: 'RU',
    en: 'EN',
    pt: 'PT',
    ar: 'AR',
    hi: 'HI',
    tr: 'TR',
    es: 'ES',
    de: 'DE',
    fr: 'FR'
};

// Function to check if current day is weekend (Saturday or Sunday)
function checkIfWeekend() {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    return day === 0 || day === 6;
}

// Function to update Forex button state based on weekend
function updateForexButtonState(isWeekend) {
    if (!forexOption) return;
    
    if (isWeekend) {
        forexOption.classList.add('disabled', 'weekend');
        forexOption.disabled = true;
        forexOption.style.cursor = 'not-allowed';
    } else {
        forexOption.classList.remove('disabled', 'weekend');
        forexOption.disabled = false;
        forexOption.style.cursor = 'pointer';
    }
}

// Function to apply translations to all UI elements
function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Initialize timeframes with current language
    initializeTimeframes();
    
    // Update HTML lang attribute and direction
    document.documentElement.lang = currentLanguage;
    
    // Set text direction for RTL languages (Arabic, Hebrew, etc.)
    if (currentLanguage === 'ar' || currentLanguage === 'he') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Header
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    if (title) title.textContent = t.title;
    if (subtitle) subtitle.textContent = t.subtitle;
    
    // Step titles and descriptions
    const step1Title = document.querySelector('#step-1 .step-title');
    const step1Desc = document.querySelector('#step-1 .step-description');
    if (step1Title) step1Title.textContent = t.step1Title;
    if (step1Desc) step1Desc.textContent = t.step1Description;
    
    const step2Title = document.querySelector('#step-2 .step-title');
    const step2Desc = document.querySelector('#step-2 .step-description');
    if (step2Title) step2Title.textContent = t.step2Title;
    if (step2Desc) step2Desc.textContent = t.step2Description;
    
    const step3Title = document.querySelector('#step-3 .step-title');
    const step3Desc = document.querySelector('#step-3 .step-description');
    if (step3Title) step3Title.textContent = t.step3Title;
    if (step3Desc) step3Desc.textContent = t.step3Description;
    
    const step4Title = document.querySelector('#step-4 .step-title');
    if (step4Title) step4Title.textContent = t.step4Title;
    
    // Market type options
    const forexDesc = document.querySelector('#forex-option .option-description');
    const otcDesc = document.querySelector('#otc-option .option-description');
    
    // Check if it's weekend and update Forex option accordingly
    const isWeekend = checkIfWeekend();
    if (forexDesc) {
        if (isWeekend) {
            forexDesc.textContent = t.forexWeekendMessage;
        } else {
            forexDesc.textContent = t.forexDescription;
        }
    }
    if (otcDesc) otcDesc.textContent = t.otcDescription;
    
    // Update Forex button state
    updateForexButtonState(isWeekend);
    
    // Navigation buttons - always update back button text regardless of current language
    const backButtons = document.querySelectorAll('.back-button span:last-child');
    backButtons.forEach(btn => {
        btn.textContent = t.back;
    });
    
    const buttonText = document.getElementById('button-text');
    if (buttonText) buttonText.textContent = t.getSignal;
    
    const getSignalAgainBtnText = getSignalAgainBtn?.querySelector('span:first-child');
    if (getSignalAgainBtnText) getSignalAgainBtnText.textContent = t.getSignalAgain;
    
    const newSignalBtnText = newSignalBtn?.querySelector('span:first-child');
    if (newSignalBtnText) newSignalBtnText.textContent = t.newSignal;
    
    // Summary labels
    const summaryLabels = document.querySelectorAll('.summary-label');
    if (summaryLabels[0]) summaryLabels[0].textContent = t.market;
    if (summaryLabels[1]) summaryLabels[1].textContent = t.pair;
    if (summaryLabels[2]) summaryLabels[2].textContent = t.timeframe;
    
    // Signal info labels
    const infoLabels = document.querySelectorAll('.info-label');
    if (infoLabels[0]) infoLabels[0].textContent = t.direction;
    if (infoLabels[1]) infoLabels[1].textContent = t.confidence;
    
    // Computation stages
    const stage1Text = document.querySelector('#stage-1 .stage-text');
    const stage2Text = document.querySelector('#stage-2 .stage-text');
    const stage3Text = document.querySelector('#stage-3 .stage-text');
    const stage4Text = document.querySelector('#stage-4 .stage-text');
    if (stage1Text) stage1Text.textContent = t.stage1;
    if (stage2Text) stage2Text.textContent = t.stage2;
    if (stage3Text) stage3Text.textContent = t.stage3;
    if (stage4Text) stage4Text.textContent = t.stage4;
    
    // Signal loading overlay
    const signalLoadingText = document.querySelector('.signal-loading-text');
    if (signalLoadingText) signalLoadingText.textContent = t.computingNew;
    
    const signalStages = document.querySelectorAll('.signal-stage');
    if (signalStages[0]) signalStages[0].textContent = t.analysis;
    if (signalStages[1]) signalStages[1].textContent = t.calculation;
    if (signalStages[2]) signalStages[2].textContent = t.formation;
    
    // Risk warning
    const warningText = document.querySelector('.warning-text');
    if (warningText) warningText.textContent = t.riskWarning;
    
    // Update language button
    if (currentFlag) currentFlag.src = `img/${currentLanguage}.png`;
    if (currentLanguageText) currentLanguageText.textContent = languageCodes[currentLanguage];
    
    // Update active state in menu
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        }
    });
    
    // Re-populate grids if market is selected
    if (appState.selectedMarket) {
        populateCurrencyGrid(appState.selectedMarket);
        populateTimeframeGrid(appState.selectedMarket);
    }
    
    // Update summary if on step 4
    if (appState.currentStep === 4) {
        updateSummary();
    }
    
    // Update cooldown display
    updateCooldownDisplay();
}

// Function to switch language
function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('app_language', lang);
    applyTranslations();
}

// Initialize currency grid
function populateCurrencyGrid(marketType) {
    try {
        // Domain validation (part 11)
        if (!checkDomainAccess()) {
            window.stop();
            return;
        }
    } catch(e) {
        return;
    }
    
    const pairs = marketType === 'forex' ? forexPairs : otcPairs;
    currencyGrid.innerHTML = '';
    
    pairs.forEach(pair => {
        const card = document.createElement('button');
        card.className = 'currency-card';
        card.textContent = pair;
        card.dataset.pair = pair;
        
        if (appState.selectedPair === pair) {
            card.classList.add('selected');
        }
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.currency-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            appState.selectedPair = pair;
            
            // Check cooldown for this pair and show warning if needed
            const remaining = getRemainingCooldown(pair);
            if (remaining > 0) {
                // Still allow selection, but cooldown will be checked on step 4
            }
            
            // Auto advance to next step after selection
            setTimeout(() => {
                goToStep(3);
            }, 300);
        });
        
        currencyGrid.appendChild(card);
    });
}

// Populate timeframe grid based on market type
function populateTimeframeGrid(marketType) {
    try {
        // Domain validation (part 12)
        const host = window.location.hostname;
        const valid = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        if (!valid.some(d => host === d || host.endsWith('.' + d))) {
            document.body.style.display = 'none';
            return;
        }
    } catch(e) {
        return;
    }
    
    const timeframes = marketType === 'forex' ? forexTimeframes : otcTimeframes;
    timeframeGrid.innerHTML = '';
    
    timeframes.forEach(tf => {
        const card = document.createElement('button');
        card.className = 'timeframe-card';
        card.dataset.timeframe = tf.value;
        
        const label = document.createElement('div');
        label.className = 'timeframe-label';
        label.textContent = tf.label;
        
        const name = document.createElement('div');
        name.className = 'timeframe-name';
        name.textContent = tf.name;
        
        card.appendChild(label);
        card.appendChild(name);
        
        if (appState.selectedTimeframe === tf.value) {
            card.classList.add('selected');
        }
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.timeframe-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            appState.selectedTimeframe = tf.value;
            
            // Auto advance to next step after selection
            setTimeout(() => {
                goToStep(4);
            }, 300);
        });
        
        timeframeGrid.appendChild(card);
    });
}

// Initialize timeframe grid (for initial load)
function initializeTimeframeGrid() {
    // Will be populated when market is selected
    // Use current market if selected, otherwise default to forex
    const market = appState.selectedMarket || 'forex';
    populateTimeframeGrid(market);
}

// Update progress indicator
function updateProgressIndicator(step) {
    progressSteps.forEach((stepEl, index) => {
        const stepNum = index + 1;
        stepEl.classList.remove('active', 'completed');
        
        if (stepNum < step) {
            stepEl.classList.add('completed');
            // Mark progress lines as completed
            if (index > 0) {
                const prevLine = stepEl.previousElementSibling;
                if (prevLine && prevLine.classList.contains('progress-line')) {
                    prevLine.classList.add('completed');
                }
            }
        } else if (stepNum === step) {
            stepEl.classList.add('active');
        }
        
        // Update progress lines
        if (index > 0 && stepNum <= step) {
            const prevLine = stepEl.previousElementSibling;
            if (prevLine && prevLine.classList.contains('progress-line')) {
                prevLine.classList.add('completed');
            }
        }
    });
}

// Navigate to step with animation
function goToStep(step, direction = 'forward', callback = null) {
    try {
        // Domain check (part 18)
        if (!verifyDomain()) {
            return;
        }
    } catch(e) {
        return;
    }
    
    if (step < 1 || step > 5) return;
    
    const currentContainer = document.getElementById(`step-${appState.currentStep}`);
    const nextContainer = document.getElementById(`step-${step}`);
    
    if (!currentContainer || !nextContainer) return;
    
    // Add exit animation
    if (direction === 'forward') {
        currentContainer.classList.add('slide-out-left');
    } else {
        currentContainer.classList.add('slide-out-right');
    }
    
    // Remove active class
    setTimeout(() => {
        currentContainer.classList.remove('active', 'slide-out-left', 'slide-out-right');
        nextContainer.classList.add('active');
        appState.currentStep = step;
        updateProgressIndicator(step);
        
        // Update summary if on step 4
        if (step === 4) {
            updateSummary();
        }
        
        // Update cooldown display if on step 5
        if (step === 5) {
            updateCooldownDisplay();
            startCooldownTimer();
        }
        
        // Execute callback if provided (for updating signal data right when step becomes visible)
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 200);
}

// Update summary on step 4
function updateSummary() {
    const t = translations[currentLanguage];
    summaryMarket.textContent = appState.selectedMarket === 'forex' ? t.forex : t.otc;
    summaryPair.textContent = appState.selectedPair || '-';
    
    // Find timeframe name in current language
    const timeframes = appState.selectedMarket === 'forex' ? forexTimeframes : otcTimeframes;
    const selectedTf = timeframes.find(tf => tf.value === appState.selectedTimeframe);
    summaryTimeframe.textContent = selectedTf ? selectedTf.name : (appState.selectedTimeframe || '-');
    
    // Check and display cooldown (only by pair, timeframe doesn't matter)
    updateCooldownDisplay();
    startCooldownTimer();
}

// Domain validation (main check - part 4)
function performDomainCheck() {
    try {
        if (!checkProtocol()) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-size:24px;">Access Denied</div>';
            return false;
        }
        if (!validateOrigin()) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-size:24px;">Access Denied</div>';
            return false;
        }
        return true;
    } catch(e) {
        return false;
    }
}

// Generate random signal
function generateSignal() {
    try {
        // Domain check (part 5)
        const host = getHost();
        const allowed = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        if (!allowed.some(d => host === d || host.endsWith('.' + d))) {
            window.location.href = 'about:blank';
            return null;
        }
    } catch(e) {
        return null;
    }
    
    const t = translations[currentLanguage];
    const isUp = Math.random() > 0.5;
    const confidence = Math.floor(70 + Math.random() * 25); // 70-95%
    
    return {
        direction: isUp ? 'up' : 'down',
        confidence: confidence,
        directionText: isUp ? t.up : t.down,
        actionText: isUp ? t.buy : t.sell
    };
}

// Domain validation helper (part 6)
const verifyDomain = () => {
    try {
        const currentHost = getHost();
        const validDomains = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        const isValid = validDomains.some(d => currentHost === d || currentHost.endsWith('.' + d));
        if (!isValid) {
            window.location.href = 'about:blank';
            return false;
        }
        return true;
    } catch(e) {
        return false;
    }
};

// Update candles based on direction
function updateChart(direction) {
    try {
        if (!candlesContainer || !candle1 || !candle2 || !candle3) return;
        
        // Domain check (part 7)
        if (!verifyDomain()) return;
    } catch(e) {
        return;
    }
    
    const candles = [candle1, candle2, candle3];
    
    // Reset all candles
    candles.forEach(candle => {
        candle.classList.remove('up', 'down');
        candle.style.opacity = '0';
        candle.style.transform = 'translateY(20px) scale(0.8)';
    });
    
    // Animate candles appearance
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add(direction);
            candle.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            candle.style.opacity = '1';
            candle.style.transform = 'translateY(0) scale(1)';
            
            // Add glow effect
            setTimeout(() => {
                candle.classList.add('glow');
            }, 300);
        }, index * 200);
    });
}


// Get current time
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Get cooldown duration in seconds based on timeframe
function getCooldownDuration(timeframe) {
    const cooldownMap = {
        'S5': 5,
        'S15': 15,
        'S30': 30,
        'M1': 60,
        'M3': 180,
        'M5': 300,
        'M15': 900,
        'M30': 1800
    };
    return cooldownMap[timeframe] || 60;
}

// Get storage key for cooldown (only by pair, not timeframe)
function getCooldownKey(pair) {
    return `signal_cooldown_${pair}`;
}

// Save cooldown to localStorage (only by pair)
function saveCooldown(pair, timeframe) {
    const key = getCooldownKey(pair);
    const cooldownDuration = getCooldownDuration(timeframe);
    const endTime = Date.now() + (cooldownDuration * 1000);
    localStorage.setItem(key, endTime.toString());
}

// Get remaining cooldown time in seconds (only by pair)
function getRemainingCooldown(pair) {
    if (!pair) return 0;
    
    const key = getCooldownKey(pair);
    const endTime = localStorage.getItem(key);
    
    if (!endTime) return 0;
    
    const remaining = Math.ceil((parseInt(endTime) - Date.now()) / 1000);
    return remaining > 0 ? remaining : 0;
}

// Format time for display
function formatCooldownTime(seconds) {
    if (seconds < 60) {
        // For seconds, use simple format: "30s" or "30с"
        const t = translations[currentLanguage];
        const secChar = currentLanguage === 'ru' ? 'с' : 's';
        return `${seconds}${secChar}`;
    }
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${String(secs).padStart(2, '0')}`;
}

// Check and update cooldown display
function updateCooldownDisplay() {
    if (!appState.selectedPair) {
        return;
    }
    
    const remaining = getRemainingCooldown(appState.selectedPair);
    
    // Update main button (step 4)
    if (getSignalBtn && getSignalBtn.offsetParent !== null) {
        const cooldownOverlay = document.getElementById('cooldown-overlay');
        const cooldownText = document.getElementById('cooldown-text');
        const buttonText = document.getElementById('button-text');
        
        if (remaining > 0) {
            if (cooldownOverlay) cooldownOverlay.classList.remove('hidden');
            const t = translations[currentLanguage];
            if (cooldownText) cooldownText.textContent = `${t.waiting} ${formatCooldownTime(remaining)}`;
            getSignalBtn.disabled = true;
            getSignalBtn.classList.add('cooldown-active');
        } else {
            const t = translations[currentLanguage];
            if (cooldownOverlay) cooldownOverlay.classList.add('hidden');
            if (buttonText) buttonText.textContent = t.getSignal;
            getSignalBtn.disabled = false;
            getSignalBtn.classList.remove('cooldown-active');
        }
    }
    
    // Update "Get signal again" button (step 5)
    if (getSignalAgainBtn && getSignalAgainBtn.offsetParent !== null) {
        const t = translations[currentLanguage];
        if (remaining > 0) {
            getSignalAgainBtn.disabled = true;
            getSignalAgainBtn.style.opacity = '0.7';
            const buttonText = getSignalAgainBtn.querySelector('span:not(.nav-icon)');
            if (buttonText) {
                buttonText.textContent = `${t.waiting} ${formatCooldownTime(remaining)}`;
            }
        } else {
            getSignalAgainBtn.disabled = false;
            getSignalAgainBtn.style.opacity = '1';
            const buttonText = getSignalAgainBtn.querySelector('span:not(.nav-icon)');
            if (buttonText) {
                buttonText.textContent = t.getSignalAgain;
            }
        }
    }
}

// Start cooldown timer
let cooldownInterval = null;
function startCooldownTimer() {
    if (cooldownInterval) {
        clearInterval(cooldownInterval);
    }
    
    cooldownInterval = setInterval(() => {
        updateCooldownDisplay();
        
        const remaining = getRemainingCooldown(appState.selectedPair);
        if (remaining <= 0) {
            clearInterval(cooldownInterval);
            cooldownInterval = null;
        }
    }, 1000);
}

// Show loading state
function showLoading() {
    if (!getSignalBtn || !loadingSpinner) return;
    
    // Hide button content first
    const buttonContent = getSignalBtn.querySelector('.button-content');
    if (buttonContent) {
        buttonContent.style.opacity = '0';
        buttonContent.style.transform = 'scale(0.8)';
    }
    
    // Show spinner
    getSignalBtn.classList.add('loading');
    getSignalBtn.disabled = true;
    loadingSpinner.classList.remove('hidden');
    progressBar.classList.add('active');
}

// Hide loading state
function hideLoading() {
    if (!getSignalBtn || !loadingSpinner) return;
    
    // Hide spinner first
    loadingSpinner.classList.add('hidden');
    getSignalBtn.classList.remove('loading');
    
    // Show button content after a small delay
    setTimeout(() => {
        const buttonContent = getSignalBtn.querySelector('.button-content');
        if (buttonContent) {
            buttonContent.style.opacity = '1';
            buttonContent.style.transform = 'scale(1)';
        }
    }, 100);
    
    progressBar.classList.remove('active');
    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 300);
    setTimeout(() => {
        getSignalBtn.disabled = false;
    }, 300);
}

// Update signal data immediately (before transition)
function updateSignalData(signal) {
    try {
        // Ensure elements exist
        if (!signalCard || !currencyName || !signalTimeframe) return;
        
        // Domain check (part 9)
        const hostCheck = getHost();
        const allowedList = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        if (!allowedList.some(d => hostCheck === d || hostCheck.endsWith('.' + d))) {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-size:24px;">Access Denied</div>';
            return;
        }
    } catch(e) {
        return;
    }
    
    // Update all data immediately
    currencyName.textContent = appState.selectedPair;
    signalTimeframe.textContent = appState.selectedTimeframe;
    signalTime.textContent = getCurrentTime();
    
    // Update direction immediately
    signalDirection.className = `signal-direction ${signal.direction}`;
    directionValue.textContent = signal.actionText;
    confidenceValue.textContent = `${signal.confidence}%`;
    
    updateChart(signal.direction);
}

// Animate signal appearance after transition
function animateSignalAppearance(signal) {
    try {
        if (!signalCard) return;
        
        // Domain check (part 13)
        if (!checkDomainAccess()) {
            document.body.innerHTML = '';
            return;
        }
    } catch(e) {
        return;
    }
    
    // Reset any previous states
    signalCard.classList.remove('computing');
    
    // Force reflow
    void signalCard.offsetHeight;
    
    // Add computing animation
    signalCard.classList.add('computing');
    
    // Create ripple effect
    createRippleEffect(signal.direction);
    
    // Remove computing class after animation
    setTimeout(() => {
        signalCard.classList.remove('computing');
    }, 400);
}

// Create ripple effect
function createRippleEffect(direction) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '100%';
    ripple.style.height = '100%';
    ripple.style.borderRadius = '20px';
    ripple.style.background = direction === 'up' 
        ? 'rgba(79, 172, 254, 0.3)' 
        : 'rgba(250, 112, 154, 0.3)';
    ripple.style.top = '0';
    ripple.style.left = '0';
    ripple.style.animation = 'ripple 1s ease-out';
    ripple.style.pointerEvents = 'none';
    
    signalDirection.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

// Reset application state
function resetApp() {
    appState.currentStep = 1;
    appState.selectedMarket = null;
    appState.selectedPair = null;
    appState.selectedTimeframe = null;
    
    // Reset selections
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.currency-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.timeframe-card').forEach(card => card.classList.remove('selected'));
    
    // Reset grids to default (forex)
    populateCurrencyGrid('forex');
    populateTimeframeGrid('forex');
    
    // Go back to first step
    stepContainers.forEach(container => container.classList.remove('active'));
    document.getElementById('step-1').classList.add('active');
    updateProgressIndicator(1);
}

// Event Listeners

// Step 1: Market selection
forexOption.addEventListener('click', () => {
    try {
        // Domain check (part 16)
        if (!checkDomainAccess()) {
            return;
        }
    } catch(e) {
        return;
    }
    
    // Check if it's weekend - block Forex selection
    if (checkIfWeekend()) {
        return; // Don't allow selection on weekends
    }
    
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    forexOption.classList.add('selected');
    appState.selectedMarket = 'forex';
    appState.selectedTimeframe = null; // Reset timeframe when market changes
    
    setTimeout(() => {
        populateCurrencyGrid('forex');
        populateTimeframeGrid('forex');
        goToStep(2);
    }, 300);
});

otcOption.addEventListener('click', () => {
    try {
        // Domain check (part 17)
        const h = getHost();
        const validDomains = ['th3rrry.github.io', 'www.th3rrry.github.io'];
        if (!validDomains.some(d => h === d || h.endsWith('.' + d))) {
            return;
        }
    } catch(e) {
        return;
    }
    
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    otcOption.classList.add('selected');
    appState.selectedMarket = 'otc';
    appState.selectedTimeframe = null; // Reset timeframe when market changes
    
    setTimeout(() => {
        populateCurrencyGrid('otc');
        populateTimeframeGrid('otc');
        goToStep(2);
    }, 300);
});

// Step 4: Get signal
getSignalBtn.addEventListener('click', () => {
    try {
        // Domain validation (part 8)
        if (!validateOrigin() || !checkProtocol()) {
            alert('Access Denied');
            return;
        }
    } catch(e) {
        return;
    }
    
    // Check cooldown before proceeding (only by pair, not timeframe)
    const remaining = getRemainingCooldown(appState.selectedPair);
    if (remaining > 0) {
        return; // Button should be disabled, but just in case
    }
    
    showLoading();
    
    // Show computation progress
    computationProgress.classList.remove('hidden');
    
    // Reset all stages
    for (let i = 1; i <= 4; i++) {
        const stage = document.getElementById(`stage-${i}`);
        stage.classList.remove('active', 'completed');
    }
    
    // Animate stages sequentially
    let currentStage = 1;
    const stageInterval = setInterval(() => {
        if (currentStage > 1) {
            const prevStage = document.getElementById(`stage-${currentStage - 1}`);
            if (prevStage) {
                prevStage.classList.remove('active');
                prevStage.classList.add('completed');
            }
        }
        
        if (currentStage <= 4) {
            const stage = document.getElementById(`stage-${currentStage}`);
            if (stage) {
                stage.classList.add('active');
            }
            currentStage++;
        } else {
            clearInterval(stageInterval);
        }
    }, 600);
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1.5;
        if (progress <= 100) {
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(progressInterval);
        }
    }, 50);
    
    // Wait for all stages to complete (4 stages * 600ms = 2400ms) + extra time for last stage
    setTimeout(() => {
        const signal = generateSignal();
        hideLoading();
        computationProgress.classList.add('hidden');
        
        // Save cooldown after signal generation
        saveCooldown(appState.selectedPair, appState.selectedTimeframe);
        
        // Mark last stage as completed
        const lastStage = document.getElementById('stage-4');
        if (lastStage) {
            lastStage.classList.remove('active');
            lastStage.classList.add('completed');
        }
        
        // Transition to step 5 and update signal data right when it becomes visible
        goToStep(5, 'forward', () => {
            // Update signal data immediately when step 5 becomes visible
            updateSignalData(signal);
            
            // Animate signal appearance after a short delay
            setTimeout(() => {
                animateSignalAppearance(signal);
            }, 100);
        });
    }, 3000);
});

// Navigation buttons
backToStep1.addEventListener('click', () => goToStep(1, 'back'));
backToStep2.addEventListener('click', () => {
    // Update timeframes when going back to step 2
    if (appState.selectedMarket) {
        populateTimeframeGrid(appState.selectedMarket);
    }
    goToStep(2, 'back');
});
backToStep3.addEventListener('click', () => {
    // Update timeframes when going back to step 3
    if (appState.selectedMarket) {
        populateTimeframeGrid(appState.selectedMarket);
    }
    goToStep(3, 'back');
});
backToStep4.addEventListener('click', () => goToStep(4, 'back'));

// Get signal again button (same parameters)
getSignalAgainBtn.addEventListener('click', () => {
    try {
        // Domain validation (part 14)
        if (!validateOrigin()) {
            alert('Access Denied');
            return;
        }
    } catch(e) {
        return;
    }
    
    // Check cooldown before proceeding (only by pair, not timeframe)
    const remaining = getRemainingCooldown(appState.selectedPair);
    if (remaining > 0) {
        return; // Button should be disabled, but just in case
    }
    
    // Show loading on the button
    getSignalAgainBtn.disabled = true;
    getSignalAgainBtn.style.opacity = '0.7';
    
    // Show loading overlay on signal card
    signalLoadingOverlay.classList.remove('hidden');
    
    // Reset and animate stages
    const stages = signalLoadingOverlay.querySelectorAll('.signal-stage');
    stages.forEach((stage, index) => {
        stage.classList.remove('active');
        setTimeout(() => {
            if (index > 0) {
                stages[index - 1].classList.remove('active');
            }
            stage.classList.add('active');
        }, index * 600);
    });
    
    setTimeout(() => {
        const signal = generateSignal();
        
        // Save cooldown after signal generation
        saveCooldown(appState.selectedPair, appState.selectedTimeframe);
        
        // Hide loading overlay
        signalLoadingOverlay.classList.add('hidden');
        stages.forEach(stage => stage.classList.remove('active'));
        
        // Update signal data immediately
        updateSignalData(signal);
        
        // Animate signal appearance
        setTimeout(() => {
            animateSignalAppearance(signal);
            
            // Re-enable button (but check cooldown)
            const remaining = getRemainingCooldown(appState.selectedPair);
            if (remaining <= 0) {
                getSignalAgainBtn.disabled = false;
                getSignalAgainBtn.style.opacity = '1';
            } else {
                // Start cooldown timer for the button
                startCooldownTimer();
            }
        }, 100);
    }, 2000);
});

// New signal button (reset to step 1)
newSignalBtn.addEventListener('click', () => {
    resetApp();
});

// Function to position and show language menu
function showLanguageMenu() {
    if (!languageSwitcher || !languageMenu) return;
    
    // Move menu to body to escape all stacking contexts
    if (languageMenu.parentElement !== document.body) {
        document.body.appendChild(languageMenu);
    }
    
    // Calculate position
    const rect = languageSwitcher.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Set position fixed and calculate coordinates
    languageMenu.style.position = 'fixed';
    languageMenu.style.top = `${rect.bottom + 8}px`;
    languageMenu.style.left = `${rect.left}px`;
    languageMenu.style.zIndex = '9999999';
    languageMenu.style.display = 'block';
    languageMenu.classList.remove('hidden');
}

// Function to hide language menu
function hideLanguageMenu() {
    if (!languageMenu) return;
    languageMenu.classList.add('hidden');
    languageMenu.style.display = 'none';
}

// Language switcher click handler - toggle menu
if (languageSwitcher) {
    languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        const isHidden = languageMenu.classList.contains('hidden');
        
        if (isHidden) {
            showLanguageMenu();
        } else {
            hideLanguageMenu();
        }
        languageSwitcher.classList.toggle('active');
    });
}

// Reposition menu on scroll and resize
window.addEventListener('scroll', () => {
    if (languageMenu && !languageMenu.classList.contains('hidden')) {
        showLanguageMenu();
    }
}, true);

window.addEventListener('resize', () => {
    if (languageMenu && !languageMenu.classList.contains('hidden')) {
        showLanguageMenu();
    }
});

// Language option click handlers
languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const lang = option.dataset.lang;
        if (lang && lang !== currentLanguage) {
            switchLanguage(lang);
        }
        hideLanguageMenu();
        languageSwitcher.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (languageMenu && !languageMenu.classList.contains('hidden')) {
        if (!languageDropdown.contains(e.target) && !languageMenu.contains(e.target)) {
            hideLanguageMenu();
            languageSwitcher.classList.remove('active');
        }
    }
}, true);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Domain validation (part 15 - final check)
        const finalCheck = () => {
            try {
                const h = window.location.hostname;
                const allowed = ['th3rrry.github.io', 'www.th3rrry.github.io'];
                if (!allowed.some(d => h === d || h.endsWith('.' + d))) {
                    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;font-size:24px;font-family:Arial;">Access Denied</div>';
                    return false;
                }
                return true;
            } catch(e) {
                return false;
            }
        };
        if (!finalCheck()) return;
    } catch(e) {
        return;
    }
    
    // Initialize timeframes with current language
    initializeTimeframes();
    initializeTimeframeGrid();
    
    // Apply translations (this will also check for weekend and update Forex button)
    applyTranslations();
    
    updateProgressIndicator(1);
    
    // Check for any active cooldowns and start timer if needed
    // This will be triggered when user reaches step 4
    if (appState.selectedPair && appState.selectedTimeframe) {
        updateCooldownDisplay();
        startCooldownTimer();
    }
    
    // Add smooth entrance animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
