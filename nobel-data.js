// ノーベル賞受賞者データ（2026年〜2000年）
// 出典: Nobel Prize 公式 (https://www.nobelprize.org/) / Wikipedia 各年ページ
// 受賞理由はライセンス対応のため要約・言い換えしています。
window.NOBEL_DATA = [
  {
    year: 2026,
    categories: {
      physics: { laureates: [{ name: "フランシス・ハルゼン", en: "Francis Halzen", country: "米国" }], reason: "IceCubeニュートリノ観測所への決定的貢献と、宇宙由来の高エネルギーニュートリノの発見", plain: "南極の分厚い氷をまるごと巨大な検出器として使い、宇宙のかなたから飛んでくる「ニュートリノ」という、ほとんど何ともぶつからない幽霊のような粒子を捕まえた。これで宇宙を光とは別の新しい方法で観測できるようになった。" },
      chemistry: { laureates: [{ name: "アンリ・カガン", en: "Henri B. Kagan", country: "フランス" }, { name: "硤合憲三", en: "Kenso Soai", country: "日本" }], reason: "不斉有機合成における非線形効果と自己触媒反応の発見", plain: "分子には右手と左手のように「鏡写しで重ならない形」があり、薬ではどちらか一方だけが欲しい。ごくわずかな偏りから一方の形だけが雪だるま式に増える反応を見つけ、狙った形の分子を効率よく作る道をひらいた。医薬品づくりに役立っている。" },
      medicine: { laureates: [{ name: "カール・ダイセロス", en: "Karl Deisseroth", country: "米国" }, { name: "ゲオルク・ナーゲル", en: "Georg Nagel", country: "ドイツ" }, { name: "ペーター・ヘーゲマン", en: "Peter Hegemann", country: "ドイツ" }], reason: "光で開くイオンチャネルとオプトジェネティクス（光遺伝学）に関する発見", plain: "もともと藻が持つ「光が当たると開くスイッチ」を神経細胞に組み込み、光を当てるだけで特定の神経だけをオン・オフできるようにした。脳のどの細胞が何をしているかを狙い撃ちで調べられる、脳研究の革命的な道具になった。" },
      literature: { laureates: [{ name: "アン・カーソン", en: "Anne Carson", country: "カナダ" }], reason: "古典の伝統と戯れつつ、現代文学の新しい形を創り出した大胆で独創的な作品群", plain: "古代ギリシャ・ローマの古典に深く通じた詩人で、その知識を自由に遊ばせながら、詩・エッセイ・翻訳の枠を混ぜ合わせた新しい形の文学を作り続けてきた。" },
      peace: { laureates: [{ name: "ナヴィ・ピレイ", en: "Navi Pillay", country: "南アフリカ" }], reason: "平和と国際法の推進への努力", plain: "アパルトヘイト下の南アフリカで差別と闘った法律家。のちに国際的な裁判や国連の人権部門で、戦争犯罪や人権侵害を法で裁く仕組みづくりに力を尽くした。" },
      economics: { laureates: [{ name: "ロバート・ホール", en: "Robert Hall", country: "米国" }, { name: "マイケル・ウッドフォード", en: "Michael Woodford", country: "米国" }], reason: "マクロ経済安定化のミクロ経済的基礎づけ", plain: "不景気やインフレを抑える政策（金利の上げ下げなど）が、なぜ・どう効くのかを、一人ひとりの企業や家庭の行動から積み上げて説明する理論を築いた。中央銀行の政策運営の土台になっている。" }
    },
    note: "物理学は南極の氷河を検出器に使うIceCubeで宇宙からの高エネルギーニュートリノを捉えた成果。生理学・医学の「オプトジェネティクス」は光で神経細胞を自在に操る手法で脳科学を一変させた。化学の硤合憲三氏が受賞。"
  },
  {
    year: 2025,
    categories: {
      physics: { laureates: [{ name: "ジョン・クラーク", en: "John Clarke", country: "英国" }, { name: "ミシェル・ドゥヴォレ", en: "Michel Devoret", country: "フランス" }, { name: "ジョン・マルティニス", en: "John M. Martinis", country: "米国" }], reason: "電気回路における巨視的な量子力学的トンネル効果とエネルギー量子化の発見", plain: "ふつうはミクロの世界でしか起きない「量子」の不思議な現象（壁をすり抜ける、とびとびの値しか取らない）を、手で触れるサイズの電気回路で起こして見せた。量子コンピュータの基礎になる成果。" },
      chemistry: { laureates: [{ name: "北川進", en: "Susumu Kitagawa", country: "日本" }, { name: "リチャード・ロブソン", en: "Richard Robson", country: "オーストラリア" }, { name: "オマー・ヤギ", en: "Omar M. Yaghi", country: "ヨルダン・米国" }], reason: "金属有機構造体（MOF）の開発", plain: "内部にスカスカの穴がびっしり空いた、スポンジのような新素材（MOF）を作った。穴に気体や水をためこめるので、砂漠の空気から水を集めたり、工場から出るCO2を回収したりできる。" },
      medicine: { laureates: [{ name: "メアリー・ブランコウ", en: "Mary E. Brunkow", country: "米国" }, { name: "フレッド・ラムズデル", en: "Fred Ramsdell", country: "米国" }, { name: "坂口志文", en: "Shimon Sakaguchi", country: "日本" }], reason: "末梢性免疫寛容に関する発見", plain: "免疫が暴走して自分の体を攻撃しないよう「ブレーキ役」をする細胞（制御性T細胞）があることを突き止めた。花粉症などのアレルギーや、関節リウマチなどの自己免疫の病気を理解する鍵になっている。" },
      literature: { laureates: [{ name: "ラースロー・クラスナホルカイ", en: "László Krasznahorkai", country: "ハンガリー" }], reason: "終末的な恐怖の中でも芸術の力を再確認させる、説得力ある先見的な作品群", plain: "長く途切れない独特の文体で知られるハンガリーの作家。世界が崩れていくような暗い世界を描きながらも、その中で芸術が持つ力を信じさせる作品を書く。" },
      peace: { laureates: [{ name: "マリア・コリナ・マチャド", en: "María Corina Machado", country: "ベネズエラ" }], reason: "ベネズエラ国民の民主的権利の推進と、独裁から民主主義への平和的移行への闘い", plain: "独裁が続くベネズエラで、国民の投票の権利や自由を取り戻し、暴力によらず民主主義へ移行させようと闘ってきた政治指導者。" },
      economics: { laureates: [{ name: "ジョエル・モキイア", en: "Joel Mokyr", country: "米国" }, { name: "フィリップ・アギヨン", en: "Philippe Aghion", country: "フランス" }, { name: "ピーター・ホーウィット", en: "Peter Howitt", country: "カナダ" }], reason: "技術進歩による持続的成長の前提条件の解明、および創造的破壊による持続的成長の理論", plain: "なぜ社会は豊かになり続けられるのかを「技術の進歩」から説明した。新しい技術が古いものを置きかえていく（創造的破壊）ことで経済が成長し続ける、という仕組みを理論にした。" }
    },
    note: "化学の「金属有機構造体（MOF）」は分子スケールの空間を無数に持つ素材で、砂漠の空気からの採水やCO2回収に応用される。北川進氏が受賞。生理学・医学の「制御性T細胞」研究は坂口志文氏が中心。"
  },
  {
    year: 2024,
    categories: {
      physics: { laureates: [{ name: "ジョン・ホップフィールド", en: "John Hopfield", country: "米国" }, { name: "ジェフリー・ヒントン", en: "Geoffrey Hinton", country: "英国・カナダ" }], reason: "人工ニューラルネットワークによる機械学習を可能にした基礎的発見と発明", plain: "いまのAIブームの土台を作った研究。人間の脳の神経回路をまねた「ニューラルネットワーク」で、コンピュータがデータから自分で学べるようにした。物理学の考え方を応用した点が評価された。" },
      chemistry: { laureates: [{ name: "デイヴィッド・ベイカー", en: "David Baker", country: "米国" }, { name: "デミス・ハサビス", en: "Demis Hassabis", country: "英国" }, { name: "ジョン・ジャンパー", en: "John M. Jumper", country: "米国" }], reason: "計算によるタンパク質設計、およびタンパク質の立体構造予測", plain: "タンパク質は折りたたまれて複雑な立体になり、その形で働きが決まる。AI「AlphaFold」で形をほぼ正確に予測できるようにし（ハサビスら）、さらにゼロから新しいタンパク質を設計できるようにした（ベイカー）。創薬を大きく加速する成果。" },
      medicine: { laureates: [{ name: "ヴィクター・アンブロス", en: "Victor Ambros", country: "米国" }, { name: "ゲイリー・ラブカン", en: "Gary Ruvkun", country: "米国" }], reason: "マイクロRNAの発見と、転写後の遺伝子制御におけるその役割", plain: "遺伝子の働きを細かく調節する、とても小さなRNA（マイクロRNA）を発見した。同じ遺伝子を持つ細胞が、皮膚や神経など別々の役割に分かれていく仕組みの理解につながった。" },
      literature: { laureates: [{ name: "ハン・ガン（韓江）", en: "Han Kang", country: "韓国" }], reason: "歴史的トラウマに向き合い、人間の生の脆さを露わにする、強く詩的な散文", plain: "『菜食主義者』などで知られる韓国の作家。歴史の傷や暴力に向き合い、人間のもろさを詩のように繊細な文章で描く。アジアの女性で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "日本原水爆被害者団体協議会（日本被団協）", en: "Nihon Hidankyo", country: "日本" }], reason: "核兵器のない世界の実現への努力と、証言を通じて核兵器が二度と使われてはならないことを示した活動", plain: "広島・長崎の被爆者（ヒバクシャ）たちの団体。自らの被爆体験を語る証言活動を通じて、核兵器が二度と使われてはならないことを世界に訴え続けてきた。" },
      economics: { laureates: [{ name: "ダロン・アセモグル", en: "Daron Acemoglu", country: "トルコ・米国" }, { name: "サイモン・ジョンソン", en: "Simon Johnson", country: "英国・米国" }, { name: "ジェイムズ・ロビンソン", en: "James A. Robinson", country: "英国・米国" }], reason: "制度がどのように形成され、繁栄に影響するかの研究", plain: "なぜ豊かな国と貧しい国に分かれるのかを、その国の「制度」（法律やルール、権力のあり方）から説明した。みんなが参加できる公正な制度を持つ国ほど繁栄しやすい、という分析で知られる。" }
    },
    note: "物理学・化学ともにAIが主役。ヒントンはディープラーニングの基礎、ハサビス・ジャンパーはDeepMindの「AlphaFold」によるタンパク質構造予測で受賞。平和賞は被爆者（ヒバクシャ）の草の根運動への授賞。"
  },
  {
    year: 2023,
    categories: {
      physics: { laureates: [{ name: "ピエール・アゴスティーニ", en: "Pierre Agostini", country: "フランス" }, { name: "フェレンツ・クラウス", en: "Ferenc Krausz", country: "ハンガリー" }, { name: "アンヌ・リュイリエ", en: "Anne L'Huillier", country: "フランス・スウェーデン" }], reason: "物質中の電子の動きを研究するためのアト秒光パルスを生成する実験的手法", plain: "ものすごく短い時間（アト秒＝100京分の1秒）だけ光る光のパルスを作った。これで、原子の中を飛び回る電子の動きという、これまで速すぎて見えなかった現象を観察できるようになった。" },
      chemistry: { laureates: [{ name: "ムンジ・バウェンディ", en: "Moungi Bawendi", country: "米国" }, { name: "ルイス・ブラス", en: "Louis Brus", country: "米国" }, { name: "アレクセイ・エキモフ", en: "Aleksey Yekimov", country: "ロシア" }], reason: "量子ドットの発見と合成", plain: "ナノサイズの極小の粒「量子ドット」を作った。大きさを変えるだけで光る色が変わる性質があり、高画質テレビ（QLED）の鮮やかな色や、医療の画像診断などに使われている。" },
      medicine: { laureates: [{ name: "カタリン・カリコ", en: "Katalin Karikó", country: "ハンガリー" }, { name: "ドリュー・ワイスマン", en: "Drew Weissman", country: "米国" }], reason: "COVID-19に対する有効なmRNAワクチン開発を可能にした、ヌクレオシド塩基修飾に関する発見", plain: "mRNAワクチンの土台になった発見。体に入れたmRNAが拒絶反応を起こさないよう、材料をわずかに改変する方法を見つけた。コロナワクチンの素早い開発を可能にした。" },
      literature: { laureates: [{ name: "ヨン・フォッセ", en: "Jon Fosse", country: "ノルウェー" }], reason: "言葉にできないものに声を与える革新的な戯曲と散文", plain: "ノルウェーの劇作家・小説家。言葉にしづらい人間の沈黙や不安を、独特のミニマルな文体ですくい取る作品で知られる。" },
      peace: { laureates: [{ name: "ナルゲス・モハンマディ", en: "Narges Mohammadi", country: "イラン" }], reason: "イランにおける女性抑圧との闘いと、万人の人権と自由を推進する闘い", plain: "イランで女性への抑圧と闘ってきた人権活動家。受賞時も投獄されており、獄中からの受賞となった。" },
      economics: { laureates: [{ name: "クラウディア・ゴールディン", en: "Claudia Goldin", country: "米国" }], reason: "女性の労働市場における成果の理解を進めた功績", plain: "200年以上の歴史データを分析し、なぜ働く女性の賃金や就業が男性と差があるのかを解き明かした。経済学賞を単独受賞した初の女性。" }
    },
    note: "生理学・医学はコロナ禍のmRNAワクチンを支えた基礎研究への授賞で、長く不遇だったカリコの受賞が話題に。物理学の「アト秒科学」は電子の瞬間的な動きを捉える新領域。"
  },
  {
    year: 2022,
    categories: {
      physics: { laureates: [{ name: "アラン・アスペ", en: "Alain Aspect", country: "フランス" }, { name: "ジョン・クラウザー", en: "John Clauser", country: "米国" }, { name: "アントン・ツァイリンガー", en: "Anton Zeilinger", country: "オーストリア" }], reason: "もつれた光子を用いた実験でベル不等式の破れを確立し、量子情報科学を開拓", plain: "離れた2つの粒子が不思議なつながり（量子もつれ）を持つことを実験で確かめた。アインシュタインも悩んだこの現象が本物だと示し、量子コンピュータや量子暗号といった新技術への道を開いた。" },
      chemistry: { laureates: [{ name: "キャロリン・ベルトッツィ", en: "Carolyn Bertozzi", country: "米国" }, { name: "モーテン・メルダル", en: "Morten Meldal", country: "デンマーク" }, { name: "バリー・シャープレス", en: "K. Barry Sharpless", country: "米国" }], reason: "クリックケミストリーと生体直交化学の開発", plain: "分子同士を、まるでバックルを「カチッ」とはめるように簡単・確実につなぐ手法（クリックケミストリー）を開発。さらに生きた細胞の中でもそれを使えるようにし、創薬や病気の研究に役立っている。" },
      medicine: { laureates: [{ name: "スバンテ・ペーボ", en: "Svante Pääbo", country: "スウェーデン" }], reason: "絶滅したヒト族のゲノムと人類進化に関する発見", plain: "数万年前に絶滅したネアンデルタール人の骨からDNAを取り出し、ゲノムを解読した。現代人の中に彼らの遺伝子が今も残っていることを示し、「古代DNA」という研究分野を切り開いた。" },
      literature: { laureates: [{ name: "アニー・エルノー", en: "Annie Ernaux", country: "フランス" }], reason: "個人の記憶の根源と疎外、集団的制約を暴く勇気と臨床的な鋭さ", plain: "自分自身の人生や記憶を、感情を抑えた冷静な筆致で描くフランスの作家。個人の体験を通して、社会の中の格差や女性の立場を浮かび上がらせる。" },
      peace: { laureates: [{ name: "アレシ・ビャリャツキ", en: "Ales Bialiatski", country: "ベラルーシ" }, { name: "メモリアル", en: "Memorial", country: "ロシア" }, { name: "市民自由センター", en: "Centre for Civil Liberties", country: "ウクライナ" }], reason: "権力批判の権利と市民の基本的権利を擁護し、戦争犯罪や人権侵害を記録してきた活動", plain: "ベラルーシ・ロシア・ウクライナで人権や市民の自由を守ってきた活動家と2団体。権力の乱用や戦争犯罪を記録し、市民社会の大切さを示した。" },
      economics: { laureates: [{ name: "ベン・バーナンキ", en: "Ben Bernanke", country: "米国" }, { name: "ダグラス・ダイアモンド", en: "Douglas Diamond", country: "米国" }, { name: "フィリップ・ディビッグ", en: "Philip Dybvig", country: "米国" }], reason: "銀行と金融危機に関する研究", plain: "銀行がなぜ経済に不可欠で、なぜ金融危機（取り付け騒ぎなど）が起きると大打撃になるのかを解明した。バーナンキは後にFRB議長としてリーマンショックに対応した人物でもある。" }
    },
    note: "シャープレスは2001年に続く2度目の化学賞。生理学・医学のペーボはネアンデルタール人のゲノム解読で「古代DNA」研究を創始。"
  },
  {
    year: 2021,
    categories: {
      physics: { laureates: [{ name: "真鍋淑郎", en: "Syukuro Manabe", country: "日本・米国" }, { name: "クラウス・ハッセルマン", en: "Klaus Hasselmann", country: "ドイツ" }, { name: "ジョルジョ・パリージ", en: "Giorgio Parisi", country: "イタリア" }], reason: "地球気候の物理モデル化と地球温暖化の予測、および物理系における無秩序と揺らぎの相互作用の発見", plain: "真鍋淑郎氏は、CO2が増えると地球が温まることを物理モデルで示し、温暖化予測の基礎を築いた。複雑で予測しにくい現象を科学的に扱えることを示した業績で、気候変動研究が初めて物理学賞の主役になった。" },
      chemistry: { laureates: [{ name: "ベンヤミン・リスト", en: "Benjamin List", country: "ドイツ" }, { name: "デヴィッド・マクミラン", en: "David MacMillan", country: "英国" }], reason: "不斉有機触媒の開発", plain: "化学反応を助ける「触媒」は、従来は金属や酵素が主流だった。そこに、小さな有機分子を使う新しい第3の触媒を生み出した。安く環境にやさしく、医薬品づくりなどに広く使われている。" },
      medicine: { laureates: [{ name: "デヴィッド・ジュリアス", en: "David Julius", country: "米国" }, { name: "アーデム・パタプティアン", en: "Ardem Patapoutian", country: "レバノン・米国" }], reason: "温度と触覚の受容体の発見", plain: "私たちが熱さ・冷たさ・触れられた感覚をどう感じ取っているのか、その仕組み（センサーとなるタンパク質）を突き止めた。唐辛子の辛さで熱を感じるセンサーの発見などで知られる。" },
      literature: { laureates: [{ name: "アブドゥルラザク・グルナ", en: "Abdulrazak Gurnah", country: "タンザニア・英国" }], reason: "植民地主義の影響と、文化や大陸の狭間にある難民の運命への、妥協のない慈悲深い洞察", plain: "ザンジバル（現タンザニア）出身で英国に渡った作家。植民地支配の爪あとや、文化の狭間で生きる難民の運命を、静かで思いやりのある筆致で描く。" },
      peace: { laureates: [{ name: "マリア・レッサ", en: "Maria Ressa", country: "フィリピン・米国" }, { name: "ドミトリー・ムラトフ", en: "Dmitry Muratov", country: "ロシア" }], reason: "民主主義と恒久平和の前提である表現の自由を守る努力", plain: "フィリピンとロシアのジャーナリスト2人。権力の圧力や危険にさらされながらも、報道の自由を守って活動してきた。言論の自由が民主主義と平和の土台であることを示した。" },
      economics: { laureates: [{ name: "デヴィッド・カード", en: "David Card", country: "カナダ・米国" }, { name: "ヨシュア・アングリスト", en: "Joshua Angrist", country: "米国・イスラエル" }, { name: "グイド・インベンス", en: "Guido Imbens", country: "米国・オランダ" }], reason: "労働経済学への実証的貢献、および因果関係分析への方法論的貢献", plain: "実験できない社会の出来事（最低賃金の引き上げが雇用に与える影響など）から、何が原因で何が結果かを見抜く方法を確立した。現実のデータで経済を分析する手法を大きく進めた。" }
    },
    note: "物理学は気候変動研究が初めて主役に。真鍋淑郎氏が温暖化予測の先駆者として受賞。平和賞はジャーナリストに授与され、報道の自由の重要性を強調した。"
  },
  {
    year: 2020,
    categories: {
      physics: { laureates: [{ name: "ロジャー・ペンローズ", en: "Roger Penrose", country: "英国" }, { name: "ラインハルト・ゲンツェル", en: "Reinhard Genzel", country: "ドイツ" }, { name: "アンドレア・ゲズ", en: "Andrea Ghez", country: "米国" }], reason: "ブラックホール形成が一般相対論の確固たる予測であることの発見、および銀河系中心の超大質量コンパクト天体の発見", plain: "ペンローズはブラックホールが理論上必ず生まれることを数学で証明。ゲンツェルとゲズは、私たちの銀河系の中心に巨大なブラックホールがあることを長年の観測で突き止めた。" },
      chemistry: { laureates: [{ name: "エマニュエル・シャルパンティエ", en: "Emmanuelle Charpentier", country: "フランス" }, { name: "ジェニファー・ダウドナ", en: "Jennifer Doudna", country: "米国" }], reason: "ゲノム編集手法（CRISPR-Cas9）の開発", plain: "遺伝子の狙った場所を正確に切り貼りできる「遺伝子のハサミ」CRISPR-Cas9を開発した。病気の治療や品種改良に革命をもたらした技術で、女性2人の受賞も話題になった。" },
      medicine: { laureates: [{ name: "ハーヴェイ・オルター", en: "Harvey Alter", country: "米国" }, { name: "マイケル・ホートン", en: "Michael Houghton", country: "英国" }, { name: "チャールズ・ライス", en: "Charles Rice", country: "米国" }], reason: "C型肝炎ウイルスの発見", plain: "原因不明だった肝炎を引き起こすC型肝炎ウイルスを発見・特定した。これにより輸血の安全が高まり、検査や治療薬の開発が進んで、多くの命が救われた。" },
      literature: { laureates: [{ name: "ルイーズ・グリュック", en: "Louise Glück", country: "米国" }], reason: "厳粛な美しさで個の存在を普遍的なものにする、紛れもない詩的声", plain: "アメリカの詩人。素朴で静かな美しさを持つ言葉で、個人の経験を誰にでも通じる普遍的なものへと描き出す。" },
      peace: { laureates: [{ name: "国連世界食糧計画（WFP）", en: "World Food Programme", country: "国連" }], reason: "飢餓との闘いと、紛争地域での平和条件改善への貢献", plain: "世界中の飢餓と闘う国連の機関。紛争地や災害地に食料を届け、食料を奪い合う争いを防ぐことで平和にも貢献してきた。" },
      economics: { laureates: [{ name: "ポール・ミルグロム", en: "Paul Milgrom", country: "米国" }, { name: "ロバート・ウィルソン", en: "Robert Wilson", country: "米国" }], reason: "オークション理論の改良と新しいオークション形式の発明", plain: "どうすれば入札（オークション）が公平で効率よくなるかを理論的に研究し、新しい方式を考案した。電波の周波数帯を通信会社に割り当てる国のオークションなどで実際に使われている。" }
    },
    note: "化学のCRISPR-Cas9は「遺伝子のハサミ」と呼ばれるゲノム編集技術で、女性2人による受賞も注目された。コロナ禍のため式典は規模を縮小。"
  },
  {
    year: 2019,
    categories: {
      physics: { laureates: [{ name: "ジェームズ・ピーブルズ", en: "James Peebles", country: "カナダ・米国" }, { name: "ミシェル・マイヨール", en: "Michel Mayor", country: "スイス" }, { name: "ディディエ・ケロー", en: "Didier Queloz", country: "スイス" }], reason: "物理的宇宙論における理論的発見、および太陽型星を周回する系外惑星の発見", plain: "ピーブルズは宇宙がどう進化してきたかの理論を築いた。マイヨールとケローは、太陽のような星のまわりを回る惑星（系外惑星）を初めて発見し、太陽系の外にも惑星があることを示した。" },
      chemistry: { laureates: [{ name: "ジョン・グッドイナフ", en: "John Goodenough", country: "米国" }, { name: "スタンリー・ウィッティンガム", en: "M. Stanley Whittingham", country: "英国・米国" }, { name: "吉野彰", en: "Akira Yoshino", country: "日本" }], reason: "リチウムイオン電池の開発", plain: "スマホ・ノートPC・電気自動車に欠かせない充電式のリチウムイオン電池を実用化した。吉野彰氏が安全で軽い電池の形を完成させた。受賞時97歳のグッドイナフは当時の史上最高齢受賞者。" },
      medicine: { laureates: [{ name: "ウィリアム・ケーリン", en: "William Kaelin Jr.", country: "米国" }, { name: "ピーター・ラトクリフ", en: "Peter Ratcliffe", country: "英国" }, { name: "グレッグ・セメンザ", en: "Gregg Semenza", country: "米国" }], reason: "細胞が酸素の利用度を感知し適応する仕組みの発見", plain: "体の細胞が、酸素が足りているか足りないかを感じ取って適応する仕組みを解明した。貧血や、がんが酸素を取り込む仕組みの理解につながり、新しい治療薬の開発にも役立っている。" },
      literature: { laureates: [{ name: "ペーター・ハントケ", en: "Peter Handke", country: "オーストリア" }], reason: "言語的独創性で人間経験の周縁と特異性を探求した影響力ある作品", plain: "オーストリアの作家。独創的な言葉づかいで人間の経験の細部を描く。一方で政治的な立場をめぐり受賞時に大きな論争も起きた。" },
      peace: { laureates: [{ name: "アビィ・アハメド", en: "Abiy Ahmed", country: "エチオピア" }], reason: "平和と国際協力への努力、特に隣国エリトリアとの国境紛争を解決した決定的な取り組み", plain: "エチオピアの首相。長年対立していた隣国エリトリアとの国境紛争の和平を実現したことで受賞した。" },
      economics: { laureates: [{ name: "アビジット・バナジー", en: "Abhijit Banerjee", country: "米国" }, { name: "エステル・デュフロ", en: "Esther Duflo", country: "フランス・米国" }, { name: "マイケル・クレマー", en: "Michael Kremer", country: "米国" }], reason: "世界の貧困緩和への実験的アプローチ", plain: "貧困対策を「どの方法が本当に効果があるか」を現場で実験して確かめる手法を広めた。教育や医療の支援策を科学的に検証する流れを作った。デュフロは経済学賞で史上最年少かつ2人目の女性受賞者。" }
    },
    note: "化学のリチウムイオン電池はスマホからEVまで現代社会を支える技術で、吉野彰氏が受賞。96歳のグッドイナフは当時の最高齢受賞者。"
  },
  {
    year: 2018,
    categories: {
      physics: { laureates: [{ name: "アーサー・アシュキン", en: "Arthur Ashkin", country: "米国" }, { name: "ジェラール・ムルー", en: "Gérard Mourou", country: "フランス" }, { name: "ドナ・ストリックランド", en: "Donna Strickland", country: "カナダ" }], reason: "レーザー物理学における画期的発明（光ピンセット、高強度・超短パルス生成法）", plain: "レーザー光で小さな粒子や細胞をつまんで動かす「光ピンセット」や、非常に強く短いレーザーパルスを作る技術を発明。目の手術（レーシック）などに応用されている。" },
      chemistry: { laureates: [{ name: "フランシス・アーノルド", en: "Frances Arnold", country: "米国" }, { name: "ジョージ・スミス", en: "George Smith", country: "米国" }, { name: "グレゴリー・ウィンター", en: "Gregory Winter", country: "英国" }], reason: "酵素の指向性進化、およびペプチド・抗体のファージディスプレイ", plain: "自然の進化をまねて試験管の中で有用な酵素やタンパク質を「育てる」手法を開発した。環境にやさしい洗剤や燃料、新しい薬の開発に役立っている。" },
      medicine: { laureates: [{ name: "ジェームズ・アリソン", en: "James Allison", country: "米国" }, { name: "本庶佑", en: "Tasuku Honjo", country: "日本" }], reason: "免疫の負の制御を抑制することによるがん治療法の発見", plain: "がん細胞は免疫のブレーキを悪用して攻撃を逃れている。そのブレーキを外して免疫にがんを攻撃させる、新しいタイプのがん治療（免疫療法）の道を開いた。本庶佑氏の発見は治療薬オプジーボにつながった。" },
      literature: { laureates: [{ name: "（選考延期）", en: "—", country: "—" }], reason: "スウェーデン・アカデミーのスキャンダルにより授賞見送り（2019年に発表）", plain: "この年は選考機関（スウェーデン・アカデミー）の不祥事で文学賞が見送られ、翌2019年に2年分がまとめて発表された。" },
      peace: { laureates: [{ name: "デニス・ムクウェゲ", en: "Denis Mukwege", country: "コンゴ民主共和国" }, { name: "ナディア・ムラド", en: "Nadia Murad", country: "イラク" }], reason: "戦争・武力紛争の武器としての性暴力を終わらせる努力", plain: "戦争で武器のように使われる性暴力と闘った2人。ムクウェゲは被害女性を治療する医師、ムラドは自らも被害者で、問題を世界に訴えた。" },
      economics: { laureates: [{ name: "ウィリアム・ノードハウス", en: "William Nordhaus", country: "米国" }, { name: "ポール・ローマー", en: "Paul Romer", country: "米国" }], reason: "気候変動を長期マクロ経済分析に統合、および技術革新を長期マクロ経済分析に統合", plain: "気候変動（ノードハウス）や技術革新（ローマー）といった長い目で見た要素を、経済成長の理論にきちんと組み込んだ。炭素税など温暖化対策の経済的な考え方の基礎になっている。" }
    },
    note: "生理学・医学は「免疫チェックポイント阻害」によるがん免疫療法で、本庶佑氏が受賞（オプジーボにつながる）。文学賞はアカデミーの不祥事で異例の選考延期となった。"
  },
  {
    year: 2017,
    categories: {
      physics: { laureates: [{ name: "レイナー・ワイス", en: "Rainer Weiss", country: "米国" }, { name: "キップ・ソーン", en: "Kip Thorne", country: "米国" }, { name: "バリー・バリッシュ", en: "Barry Barish", country: "米国" }], reason: "LIGO検出器への決定的貢献と重力波の観測", plain: "アインシュタインが100年前に予言した「重力波」（時空のさざ波）を、巨大な装置LIGOで初めて直接とらえた。ブラックホール同士の衝突が生んだ波を検出し、宇宙を観測する新しい手段を得た。" },
      chemistry: { laureates: [{ name: "ジャック・デュボシェ", en: "Jacques Dubochet", country: "スイス" }, { name: "ヨアヒム・フランク", en: "Joachim Frank", country: "ドイツ・米国" }, { name: "リチャード・ヘンダーソン", en: "Richard Henderson", country: "英国" }], reason: "溶液中の生体分子の高分解能構造決定のためのクライオ電子顕微鏡の開発", plain: "生体分子を急速に凍らせて、壊さずに電子顕微鏡で詳しく見る技術（クライオ電子顕微鏡）を開発した。タンパク質やウイルスの立体構造を解明でき、創薬に大きく貢献している。" },
      medicine: { laureates: [{ name: "ジェフリー・ホール", en: "Jeffrey Hall", country: "米国" }, { name: "マイケル・ロスバッシュ", en: "Michael Rosbash", country: "米国" }, { name: "マイケル・ヤング", en: "Michael Young", country: "米国" }], reason: "概日リズム（体内時計）を制御する分子機構の発見", plain: "生き物が持つ約24時間周期の「体内時計」が、どんな遺伝子やタンパク質で動いているかを解明した。睡眠や時差ぼけの理解につながる。" },
      literature: { laureates: [{ name: "カズオ・イシグロ", en: "Kazuo Ishiguro", country: "英国（日本生まれ）" }], reason: "大きな感情的力を持つ小説で、世界とのつながりという幻想の下の深淵を暴いた", plain: "『日の名残り』『わたしを離さないで』で知られる日系英国人の作家。静かで感情に訴える物語で、人と世界とのつながりの危うさを描く。" },
      peace: { laureates: [{ name: "核兵器廃絶国際キャンペーン（ICAN）", en: "ICAN", country: "スイス" }], reason: "核兵器使用の破滅的な人道的帰結への注意喚起と、条約による核兵器禁止への画期的努力", plain: "核兵器の非人道性を訴え、核兵器禁止条約の成立を後押しした国際的な市民団体の連合。" },
      economics: { laureates: [{ name: "リチャード・セイラー", en: "Richard Thaler", country: "米国" }], reason: "行動経済学への貢献", plain: "人間は必ずしも合理的に行動しない、という心理学の視点を経済学に取り入れた「行動経済学」の第一人者。人をそっと良い選択へ導く「ナッジ」の考え方で知られる。" }
    },
    note: "物理学は、アインシュタインが100年前に予言した「重力波」の初観測への授賞。文学賞は日系英国人のカズオ・イシグロが受賞。"
  },
  {
    year: 2016,
    categories: {
      physics: { laureates: [{ name: "デヴィッド・サウレス", en: "David Thouless", country: "英国" }, { name: "ダンカン・ホールデン", en: "Duncan Haldane", country: "英国" }, { name: "マイケル・コスターリッツ", en: "Michael Kosterlitz", country: "英国・米国" }], reason: "トポロジカル相転移と物質のトポロジカル相の理論的発見", plain: "「トポロジー」という、形を連続的に変えても変わらない性質を使って、物質の新しい状態を説明した。難解だが、次世代の電子機器や量子コンピュータの材料研究につながっている。" },
      chemistry: { laureates: [{ name: "ジャン＝ピエール・ソヴァージュ", en: "Jean-Pierre Sauvage", country: "フランス" }, { name: "フレイザー・ストッダート", en: "Fraser Stoddart", country: "英国・米国" }, { name: "ベン・フェリンガ", en: "Ben Feringa", country: "オランダ" }], reason: "分子マシンの設計と合成", plain: "分子でできた極小の「機械」（モーターやエレベーターのように動く分子）を作り出した。将来の超小型ロボットや新素材の基礎となる成果。" },
      medicine: { laureates: [{ name: "大隅良典", en: "Yoshinori Ohsumi", country: "日本" }], reason: "オートファジー（自食作用）の仕組みの発見", plain: "細胞が自分の中の古くなった部品を分解して再利用する「オートファジー（自食作用）」の仕組みを解明した。老化や病気との関わりでも注目されている。大隅良典氏の単独受賞。" },
      literature: { laureates: [{ name: "ボブ・ディラン", en: "Bob Dylan", country: "米国" }], reason: "偉大なアメリカの歌の伝統の中で新しい詩的表現を創造した", plain: "アメリカのシンガーソングライター。歌の歌詞を新しい詩の表現として高く評価された。ミュージシャンへの文学賞授与は賛否両論を呼んだ。" },
      peace: { laureates: [{ name: "フアン・マヌエル・サントス", en: "Juan Manuel Santos", country: "コロンビア" }], reason: "50年以上に及ぶ内戦を終わらせる断固たる努力", plain: "コロンビアの大統領として、50年以上続いた内戦を終わらせるための和平合意をまとめた功績で受賞した。" },
      economics: { laureates: [{ name: "オリバー・ハート", en: "Oliver Hart", country: "英国・米国" }, { name: "ベント・ホルムストローム", en: "Bengt Holmström", country: "フィンランド" }], reason: "契約理論への貢献", plain: "会社と社員、株主と経営者など、人と人との「契約」をどう設計すればうまくいくかを理論化した。成果報酬のあり方や企業統治の考え方に影響を与えた。" }
    },
    note: "生理学・医学は大隅良典氏が単独受賞し、細胞が自らの成分を分解・再利用する「オートファジー」を解明。文学賞はミュージシャンのボブ・ディランへの授賞で議論を呼んだ。"
  },
  {
    year: 2015,
    categories: {
      physics: { laureates: [{ name: "梶田隆章", en: "Takaaki Kajita", country: "日本" }, { name: "アーサー・マクドナルド", en: "Arthur McDonald", country: "カナダ" }], reason: "ニュートリノが質量を持つことを示すニュートリノ振動の発見", plain: "素粒子ニュートリノが飛ぶうちに種類を変える「振動」という現象を観測し、ニュートリノに重さ（質量）があることを証明した。梶田隆章氏がスーパーカミオカンデで捉えた成果。" },
      chemistry: { laureates: [{ name: "トマス・リンダール", en: "Tomas Lindahl", country: "スウェーデン・英国" }, { name: "ポール・モドリッチ", en: "Paul Modrich", country: "米国" }, { name: "アジズ・サンジャル", en: "Aziz Sancar", country: "トルコ" }], reason: "DNA修復の仕組みの研究", plain: "DNAは日々傷つくが、細胞にはそれを自分で修理する仕組みがある。その修復の仕組みを分子レベルで解明した。がんや老化の理解につながる。" },
      medicine: { laureates: [{ name: "ウィリアム・キャンベル", en: "William Campbell", country: "アイルランド・米国" }, { name: "大村智", en: "Satoshi Ōmura", country: "日本" }, { name: "屠呦呦", en: "Tu Youyou", country: "中国" }], reason: "回虫寄生虫感染症に対する新療法の発見、およびマラリアに対する新療法の発見", plain: "大村智氏らは寄生虫の病気に効く薬（イベルメクチン）のもとを発見し、アフリカの失明病などから多くの人を救った。屠呦呦氏は漢方からマラリアの特効薬を見つけた。" },
      literature: { laureates: [{ name: "スヴェトラーナ・アレクシエーヴィチ", en: "Svetlana Alexievich", country: "ベラルーシ" }], reason: "現代の苦難と勇気の記念碑ともいえる多声的な作品", plain: "戦争やチェルノブイリ原発事故などを、大勢の人への聞き取りをもとに描くベラルーシの作家。多くの声を重ね合わせる独特の手法で知られる。" },
      peace: { laureates: [{ name: "チュニジア国民対話カルテット", en: "Tunisian National Dialogue Quartet", country: "チュニジア" }], reason: "ジャスミン革命後のチュニジアにおける多元的民主主義構築への決定的貢献", plain: "「アラブの春」後の混乱に陥ったチュニジアで、対話によって内戦を防ぎ民主主義への移行を支えた4つの市民団体の連合。" },
      economics: { laureates: [{ name: "アンガス・ディートン", en: "Angus Deaton", country: "英国・米国" }], reason: "消費、貧困、福祉の分析", plain: "人々がどのようにお金を使い、貯め、豊かさや貧しさがどう生まれるのかをデータで分析した。貧困対策や福祉政策を考える土台になっている。" }
    },
    note: "物理学で梶田隆章氏（ニュートリノ振動）、生理学・医学で大村智氏（抗寄生虫薬イベルメクチン）が受賞し、日本から2部門同時受賞。"
  },
  {
    year: 2014,
    categories: {
      physics: { laureates: [{ name: "赤崎勇", en: "Isamu Akasaki", country: "日本" }, { name: "天野浩", en: "Hiroshi Amano", country: "日本" }, { name: "中村修二", en: "Shuji Nakamura", country: "日本・米国" }], reason: "明るく省エネな白色光源を可能にした高効率の青色発光ダイオード（LED）の発明", plain: "長く実現できなかった青色のLEDを作り出した。赤・緑に青が加わって白色LEDが可能になり、省エネ照明が世界中に普及した。日本出身の3氏が受賞。" },
      chemistry: { laureates: [{ name: "エリック・ベツィグ", en: "Eric Betzig", country: "米国" }, { name: "シュテファン・ヘル", en: "Stefan Hell", country: "ドイツ" }, { name: "ウィリアム・モーナー", en: "William Moerner", country: "米国" }], reason: "超解像蛍光顕微鏡の開発", plain: "光の顕微鏡では見えないとされた限界を超え、分子レベルまで見える超高性能の顕微鏡を開発した。生きた細胞の中の微細な動きを観察できるようになった。" },
      medicine: { laureates: [{ name: "ジョン・オキーフ", en: "John O'Keefe", country: "米国・英国" }, { name: "マイブリット・モーセル", en: "May-Britt Moser", country: "ノルウェー" }, { name: "エドバルド・モーセル", en: "Edvard Moser", country: "ノルウェー" }], reason: "脳内の位置情報システムを構成する細胞の発見", plain: "脳の中にある、自分が今どこにいるかを把握する「位置と地図の細胞」を発見した。脳内GPSとも呼ばれ、方向感覚や空間記憶の仕組みを明らかにした。" },
      literature: { laureates: [{ name: "パトリック・モディアノ", en: "Patrick Modiano", country: "フランス" }], reason: "記憶の芸術で、最も捉えがたい人間の運命を喚起した", plain: "フランスの作家。ナチス占領下のパリなどを舞台に、記憶をたどりながら人間の運命を描く作品で知られる。" },
      peace: { laureates: [{ name: "カイラシュ・サティヤルティ", en: "Kailash Satyarthi", country: "インド" }, { name: "マララ・ユスフザイ", en: "Malala Yousafzai", country: "パキスタン" }], reason: "子どもや若者への抑圧との闘いと、すべての子どもの教育の権利のための努力", plain: "子どもの権利と教育のために闘った2人。マララは女子教育を訴えて銃撃されても活動を続け、17歳で史上最年少の受賞者になった。" },
      economics: { laureates: [{ name: "ジャン・ティロール", en: "Jean Tirole", country: "フランス" }], reason: "市場支配力と規制の分析", plain: "巨大企業が市場を独占しすぎないよう、どう規制すればよいかを理論的に分析した。通信や金融など、少数の大企業が支配する業界の規制の考え方に影響を与えた。" }
    },
    note: "物理学は青色LEDの発明で、赤崎・天野・中村の日本人3氏（1人は米国籍）が受賞。平和賞のマララ・ユスフザイは当時17歳で史上最年少受賞者。"
  },
  {
    year: 2013,
    categories: {
      physics: { laureates: [{ name: "フランソワ・アングレール", en: "François Englert", country: "ベルギー" }, { name: "ピーター・ヒッグス", en: "Peter Higgs", country: "英国" }], reason: "素粒子の質量の起源の理解に寄与する機構（ヒッグス機構）の理論的発見。CERNのLHCで予言された粒子が確認された", plain: "なぜ物に重さ（質量）があるのかを説明する仕組みを約50年前に理論で予言した。その証拠となる「ヒッグス粒子（神の粒子）」が巨大加速器LHCで実際に見つかり、受賞につながった。" },
      chemistry: { laureates: [{ name: "マーティン・カープラス", en: "Martin Karplus", country: "オーストリア・米国" }, { name: "マイケル・レヴィット", en: "Michael Levitt", country: "多国籍" }, { name: "アリー・ワーシェル", en: "Arieh Warshel", country: "イスラエル・米国" }], reason: "複雑な化学系に対するマルチスケールモデルの開発", plain: "複雑な化学反応をコンピュータで正確にシミュレーションする手法を作った。実験する前に反応や薬の働きを画面上で予測でき、今の計算化学の基礎になっている。" },
      medicine: { laureates: [{ name: "ジェームズ・ロスマン", en: "James Rothman", country: "米国" }, { name: "ランディ・シェクマン", en: "Randy Schekman", country: "米国" }, { name: "トーマス・ズードホフ", en: "Thomas Südhof", country: "ドイツ・米国" }], reason: "細胞内の主要輸送システムである小胞輸送を制御する機構の発見", plain: "細胞の中で物質を「小さな袋」に入れて必要な場所へ正確に届ける輸送の仕組みを解明した。ホルモンや神経伝達物質がタイミングよく放出される仕組みの理解につながる。" },
      literature: { laureates: [{ name: "アリス・マンロー", en: "Alice Munro", country: "カナダ" }], reason: "現代短編小説の名手", plain: "カナダの作家で「現代短編小説の名手」と称される。普通の人々の人生の機微を短編で鮮やかに描く。" },
      peace: { laureates: [{ name: "化学兵器禁止機関（OPCW）", en: "OPCW", country: "オランダ" }], reason: "化学兵器を廃絶するための広範な努力", plain: "毒ガスなどの化学兵器を世界からなくすために活動する国際機関。各国の化学兵器の廃棄を監視・推進している。" },
      economics: { laureates: [{ name: "ユージン・ファーマ", en: "Eugene Fama", country: "米国" }, { name: "ラース・ハンセン", en: "Lars Peter Hansen", country: "米国" }, { name: "ロバート・シラー", en: "Robert Shiller", country: "米国" }], reason: "資産価格の実証的分析", plain: "株や住宅などの価格がどう決まり、どう動くのかを分析した。短期の値動きは読めなくても、長期の傾向はある程度予測できることを示し、投資やバブルの理解に影響を与えた。" }
    },
    note: "物理学は「神の粒子」とも呼ばれるヒッグス粒子の予言への授賞で、前年のLHCでの発見が後押しした。"
  },
  {
    year: 2012,
    categories: {
      physics: { laureates: [{ name: "セルジュ・アロシュ", en: "Serge Haroche", country: "フランス" }, { name: "デヴィッド・ワインランド", en: "David Wineland", country: "米国" }], reason: "個々の量子系の測定と操作を可能にする画期的な実験手法", plain: "光の粒や原子を1個ずつ壊さずに観察・操作する実験手法を開発した。量子の世界を直接いじれるようになり、超高精度の時計や量子コンピュータの研究につながっている。" },
      chemistry: { laureates: [{ name: "ロバート・レフコウィッツ", en: "Robert Lefkowitz", country: "米国" }, { name: "ブライアン・コビルカ", en: "Brian Kobilka", country: "米国" }], reason: "Gタンパク質共役受容体（GPCR）の研究", plain: "細胞の表面にあって、外からの信号（光・匂い・ホルモンなど）を受け取るセンサー（GPCR）の仕組みを解明した。市販薬の多くがこのセンサーに効くため、創薬にとても重要。" },
      medicine: { laureates: [{ name: "ジョン・ガードン", en: "John Gurdon", country: "英国" }, { name: "山中伸弥", en: "Shinya Yamanaka", country: "日本" }], reason: "成熟細胞を初期化して多能性を持たせられるという発見（iPS細胞）", plain: "一度大人になった細胞を、どんな細胞にもなれる元の状態に戻せることを示した。山中伸弥氏のiPS細胞は、再生医療や新薬開発に大きな可能性を開いた。" },
      literature: { laureates: [{ name: "莫言", en: "Mo Yan", country: "中国" }], reason: "幻覚的なリアリズムで民話、歴史、現代を融合させた", plain: "中国の作家。故郷を舞台に、民話や歴史と現実を幻想的に混ぜ合わせた物語を描く。中国国籍で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "欧州連合（EU）", en: "European Union", country: "EU" }], reason: "60年以上にわたり欧州の平和、和解、民主主義、人権の前進に貢献", plain: "戦争を繰り返してきたヨーロッパを、60年以上にわたり平和と協調のもとにまとめてきた功績でEUが受賞した。" },
      economics: { laureates: [{ name: "アルヴィン・ロス", en: "Alvin Roth", country: "米国" }, { name: "ロイド・シャプレー", en: "Lloyd Shapley", country: "米国" }], reason: "安定的な配分の理論とマーケットデザインの実践", plain: "お金を使わずに「誰と誰を組み合わせるか」をうまく決める理論を作った。臓器移植のドナーと患者のマッチングや、学校・研修先の割り当てなどに実際に使われている。" }
    },
    note: "生理学・医学は山中伸弥氏のiPS細胞（人工多能性幹細胞）への授賞で、再生医療の扉を開いた画期的成果。"
  },
  {
    year: 2011,
    categories: {
      physics: { laureates: [{ name: "ソール・パールマッター", en: "Saul Perlmutter", country: "米国" }, { name: "ブライアン・シュミット", en: "Brian Schmidt", country: "オーストラリア" }, { name: "アダム・リース", en: "Adam Riess", country: "米国" }], reason: "遠方の超新星の観測を通じた宇宙の加速膨張の発見", plain: "遠くの超新星（星の大爆発）を観測し、宇宙の膨張がだんだん速くなっていることを発見した。その原因は正体不明の「ダークエネルギー」と考えられ、宇宙論の大問題になっている。" },
      chemistry: { laureates: [{ name: "ダン・シェヒトマン", en: "Dan Shechtman", country: "イスラエル・米国" }], reason: "準結晶の発見", plain: "それまで「ありえない」とされていた、規則的なのにくり返さない不思議な原子配列の結晶（準結晶）を発見した。発表当初は否定されたが、後に正しさが認められた。" },
      medicine: { laureates: [{ name: "ブルース・ボイトラー", en: "Bruce Beutler", country: "米国" }, { name: "ジュール・ホフマン", en: "Jules Hoffmann", country: "フランス" }, { name: "ラルフ・スタインマン", en: "Ralph Steinman", country: "カナダ" }], reason: "自然免疫の活性化に関する発見、および樹状細胞と獲得免疫における役割の発見", plain: "体が病原体を見つけて最初に反応する「免疫の初期防御」の仕組みを解明した。ワクチンや免疫の病気の理解につながる。スタインマンは受賞発表の3日前に死去していた。" },
      literature: { laureates: [{ name: "トーマス・トランストロンメル", en: "Tomas Tranströmer", country: "スウェーデン" }], reason: "凝縮され透明なイメージを通して現実への新鮮な接近を与えた", plain: "スウェーデンの詩人。研ぎ澄まされた短い言葉とイメージで、日常の風景の奥にある現実を新鮮に見せる詩で知られる。" },
      peace: { laureates: [{ name: "エレン・ジョンソン・サーリーフ", en: "Ellen Johnson Sirleaf", country: "リベリア" }, { name: "リーマ・ボウイー", en: "Leymah Gbowee", country: "リベリア" }, { name: "タワックル・カルマン", en: "Tawakkul Karman", country: "イエメン" }], reason: "女性の安全と、平和構築への完全な参加の権利を求める非暴力の闘い", plain: "女性の安全と、社会づくりに女性が参加する権利のために非暴力で闘った3人。アフリカ初の女性大統領サーリーフらが受賞した。" },
      economics: { laureates: [{ name: "トーマス・サージェント", en: "Thomas Sargent", country: "米国" }, { name: "クリストファー・シムズ", en: "Christopher Sims", country: "米国" }], reason: "マクロ経済における原因と結果の実証研究", plain: "金利の変更や政策が経済に及ぼす影響を、データから「何が原因で何が結果か」を見分けて分析する手法を築いた。経済政策の効果を検証する土台になっている。" }
    },
    note: "生理学・医学のスタインマンは授賞発表の直前に死去し、「存命者に限る」という原則をめぐり例外的に受賞が維持された。"
  },
  {
    year: 2010,
    categories: {
      physics: { laureates: [{ name: "アンドレ・ガイム", en: "Andre Geim", country: "ロシア・英国" }, { name: "コンスタンチン・ノボセロフ", en: "Konstantin Novoselov", country: "ロシア・英国" }], reason: "二次元素材グラフェンに関する画期的な実験", plain: "鉛筆の芯（黒鉛）から、原子1個分の薄さの炭素シート「グラフェン」を取り出した。非常に丈夫で電気をよく通し、次世代の電子機器や素材として期待されている。" },
      chemistry: { laureates: [{ name: "リチャード・ヘック", en: "Richard Heck", country: "米国" }, { name: "根岸英一", en: "Ei-ichi Negishi", country: "日本" }, { name: "鈴木章", en: "Akira Suzuki", country: "日本" }], reason: "有機合成におけるパラジウム触媒クロスカップリング", plain: "パラジウムという金属を仲立ちにして、炭素同士をうまくつなぎ合わせる技術（クロスカップリング）を開発した。医薬品や液晶など複雑な分子づくりに不可欠で、根岸英一・鈴木章の両氏が受賞。" },
      medicine: { laureates: [{ name: "ロバート・エドワーズ", en: "Robert Edwards", country: "英国" }], reason: "体外受精（IVF）の開発", plain: "体の外で卵子と精子を受精させる体外受精（IVF）を開発した。1978年に初めての「試験管ベビー」が誕生し、子どもを望む多くの夫婦に道を開いた。" },
      literature: { laureates: [{ name: "マリオ・バルガス・リョサ", en: "Mario Vargas Llosa", country: "ペルー・スペイン" }], reason: "権力構造の精緻な描写と、個人の抵抗・反逆・敗北の鋭いイメージ", plain: "ペルー出身の作家。権力のあり方や、それに抗う個人の姿を鋭く描くラテンアメリカ文学の巨匠。" },
      peace: { laureates: [{ name: "劉暁波", en: "Liu Xiaobo", country: "中国" }], reason: "中国における基本的人権のための長く非暴力の闘い", plain: "中国で民主化と人権を訴え続けた活動家。受賞時は投獄中で授賞式に出られず、会場には空席の椅子が置かれた。中国政府は強く反発した。" },
      economics: { laureates: [{ name: "ピーター・ダイアモンド", en: "Peter Diamond", country: "米国" }, { name: "デール・モーテンセン", en: "Dale Mortensen", country: "米国" }, { name: "クリストファー・ピサリデス", en: "Christopher Pissarides", country: "キプロス・英国" }], reason: "探索摩擦を伴う市場の分析", plain: "求人があるのに失業者も多い、といった「探す側と探される側がうまく出会えない」状況を理論化した。雇用政策や労働市場を考える基礎になっている。" }
    },
    note: "化学で根岸英一・鈴木章の両氏が受賞（クロスカップリング反応）。平和賞の劉暁波は投獄中で、授賞式は空席の椅子で行われ、中国政府が強く反発した。"
  },
  {
    year: 2009,
    categories: {
      physics: { laureates: [{ name: "チャールズ・カオ", en: "Charles K. Kao", country: "中国・英国" }, { name: "ウィラード・ボイル", en: "Willard Boyle", country: "カナダ" }, { name: "ジョージ・スミス", en: "George E. Smith", country: "米国" }], reason: "光ファイバーでの光伝送に関する画期的成果、およびCCDセンサーの発明", plain: "カオは光を使って大量のデータを送る光ファイバー通信の基礎を築き、ボイルとスミスはデジカメの心臓部となる画像センサー（CCD）を発明した。今のインターネットとデジタル写真を支える技術。" },
      chemistry: { laureates: [{ name: "ヴェンカトラマン・ラマクリシュナン", en: "Venkatraman Ramakrishnan", country: "英国・米国" }, { name: "トーマス・スタイツ", en: "Thomas Steitz", country: "米国" }, { name: "アダ・ヨナット", en: "Ada Yonath", country: "イスラエル" }], reason: "リボソームの構造と機能の研究", plain: "細胞の中でタンパク質を作る工場「リボソーム」の精密な構造を解明した。多くの抗生物質がこのリボソームを狙って効くため、新しい薬の開発にも役立っている。" },
      medicine: { laureates: [{ name: "エリザベス・ブラックバーン", en: "Elizabeth Blackburn", country: "オーストラリア・米国" }, { name: "キャロル・グライダー", en: "Carol Greider", country: "米国" }, { name: "ジャック・ショスタク", en: "Jack Szostak", country: "カナダ・米国" }], reason: "テロメアとテロメラーゼ酵素による染色体保護の仕組みの発見", plain: "染色体の端を保護する「テロメア」という部分と、それを維持する酵素の仕組みを解明した。細胞の老化やがんとの関わりで注目されている。" },
      literature: { laureates: [{ name: "ヘルタ・ミュラー", en: "Herta Müller", country: "ドイツ・ルーマニア" }], reason: "詩の凝縮と散文の率直さで、虐げられた人々の情景を描いた", plain: "ルーマニアの独裁政権下での抑圧の経験をもとに、虐げられた人々の姿を凝縮された言葉で描くドイツの作家。" },
      peace: { laureates: [{ name: "バラク・オバマ", en: "Barack Obama", country: "米国" }], reason: "国際外交と諸国民間の協力を強化する並外れた努力", plain: "アメリカ大統領。核軍縮や国際協調への姿勢が評価されたが、就任からわずか9か月での受賞に「早すぎる」との批判も多かった。" },
      economics: { laureates: [{ name: "エリノア・オストロム", en: "Elinor Ostrom", country: "米国" }, { name: "オリバー・ウィリアムソン", en: "Oliver Williamson", country: "米国" }], reason: "経済ガバナンス、特にコモンズ（共有資源）の分析、および企業の境界の分析", plain: "オストロムは、漁場や森林などみんなで使う資源（コモンズ）を、住民が自分たちでうまく管理できることを示した。経済学賞で初の女性受賞者。" }
    },
    note: "物理学の光ファイバー・CCDは現代の通信とデジタルカメラの基盤。平和賞は就任9か月のオバマへの授賞で時期尚早との批判も多かった。オストロムは経済学賞初の女性受賞者。"
  },
  {
    year: 2008,
    categories: {
      physics: { laureates: [{ name: "小林誠", en: "Makoto Kobayashi", country: "日本" }, { name: "益川敏英", en: "Toshihide Maskawa", country: "日本" }, { name: "南部陽一郎", en: "Yoichiro Nambu", country: "日本・米国" }], reason: "少なくとも3世代のクォークの存在を予言する対称性の破れの起源の発見、および自発的対称性の破れの機構の発見", plain: "物質を形づくる基本粒子「クォーク」に関する「対称性の破れ」という理論で、宇宙に物質が存在する理由の理解を深めた。小林・益川・南部の日本出身3氏が受賞。" },
      chemistry: { laureates: [{ name: "下村脩", en: "Osamu Shimomura", country: "日本" }, { name: "マーティン・チャルフィー", en: "Martin Chalfie", country: "米国" }, { name: "ロジャー・チェン", en: "Roger Tsien", country: "米国" }], reason: "緑色蛍光タンパク質（GFP）の発見と開発", plain: "オワンクラゲから、光ると緑色に輝くタンパク質（GFP）を発見・応用した。細胞の中の特定の部分を光らせて観察できる「目印」として、生命科学の標準ツールになった。下村脩氏が発見。" },
      medicine: { laureates: [{ name: "ハラルト・ツア・ハウゼン", en: "Harald zur Hausen", country: "ドイツ" }, { name: "フランソワーズ・バレ＝シヌシ", en: "Françoise Barré-Sinoussi", country: "フランス" }, { name: "リュック・モンタニエ", en: "Luc Montagnier", country: "フランス" }], reason: "子宮頸がんを引き起こすヒトパピローマウイルスの発見、およびHIVの発見", plain: "子宮頸がんの原因ウイルス（HPV）を発見し、予防ワクチンの道を開いた（ツア・ハウゼン）。また、エイズの原因ウイルスHIVを発見した（バレ＝シヌシ、モンタニエ）。" },
      literature: { laureates: [{ name: "ジャン＝マリ・ギュスターヴ・ル・クレジオ", en: "J.M.G. Le Clézio", country: "フランス・モーリシャス" }], reason: "新たな出発、詩的冒険、官能的恍惚の作家", plain: "フランスの作家。文明社会の外にある自然や異文化への旅を、詩的な感性で描く作品で知られる。" },
      peace: { laureates: [{ name: "マルッティ・アハティサーリ", en: "Martti Ahtisaari", country: "フィンランド" }], reason: "30年以上にわたり各大陸で国際紛争を解決してきた重要な努力", plain: "フィンランドの元大統領。30年以上にわたり世界各地の紛争の調停に力を尽くした外交官として受賞した。" },
      economics: { laureates: [{ name: "ポール・クルーグマン", en: "Paul Krugman", country: "米国" }], reason: "貿易パターンと経済活動の立地の分析", plain: "なぜ国同士が似た製品を貿易し合うのか、なぜ経済活動が特定の都市に集まるのかを理論で説明した。グローバル化や都市集中の理解につながる。新聞コラムニストとしても有名。" }
    },
    note: "物理学で小林・益川・南部、化学で下村脩と、日本（出身）の受賞者が4人集中した年。下村脩のGFPは細胞を光らせて観察する標準ツールになった。"
  },
  {
    year: 2007,
    categories: {
      physics: { laureates: [{ name: "アルベール・フェール", en: "Albert Fert", country: "フランス" }, { name: "ペーター・グリュンベルク", en: "Peter Grünberg", country: "ドイツ" }], reason: "巨大磁気抵抗（GMR）の発見", plain: "ごく弱い磁気の変化を大きな電気信号に変える現象（巨大磁気抵抗）を発見した。ハードディスクの読み取りヘッドに使われ、記録容量が一気に増えた。" },
      chemistry: { laureates: [{ name: "ゲルハルト・エルトル", en: "Gerhard Ertl", country: "ドイツ" }], reason: "固体表面における化学反応過程の研究", plain: "金属などの表面で化学反応がどう進むかを分子レベルで解明した。肥料の生産や、自動車の排ガスを浄化する触媒などの理解につながっている。" },
      medicine: { laureates: [{ name: "マリオ・カペッキ", en: "Mario Capecchi", country: "イタリア・米国" }, { name: "マーティン・エヴァンス", en: "Martin Evans", country: "英国" }, { name: "オリバー・スミティーズ", en: "Oliver Smithies", country: "英国・米国" }], reason: "胚性幹細胞を用いてマウスに特定の遺伝子改変を導入する原理の発見", plain: "マウスの特定の遺伝子を狙って変える技術（ノックアウトマウス）を確立した。病気の遺伝子の役割を調べる標準手法になり、医学研究を大きく進めた。" },
      literature: { laureates: [{ name: "ドリス・レッシング", en: "Doris Lessing", country: "英国（イラン生まれ）" }], reason: "懐疑と情熱、先見的な力で分断された文明を精査した女性経験の叙事詩人", plain: "イギリスの作家。女性の経験や社会の分断を、鋭い視点と情熱をもって描いた。受賞時87歳だった。" },
      peace: { laureates: [{ name: "気候変動に関する政府間パネル（IPCC）", en: "IPCC", country: "国連" }, { name: "アル・ゴア", en: "Al Gore", country: "米国" }], reason: "人為的な気候変動に関する知識を広め、対策の基礎を築いた努力", plain: "地球温暖化が人間の活動によることを科学的にまとめて世界に広めた国連のパネル（IPCC）と、映画などで啓発した元米副大統領アル・ゴアが受賞した。" },
      economics: { laureates: [{ name: "レオニード・ハーヴィッツ", en: "Leonid Hurwicz", country: "ポーランド・米国" }, { name: "エリック・マスキン", en: "Eric Maskin", country: "米国" }, { name: "ロジャー・マイヤーソン", en: "Roger Myerson", country: "米国" }], reason: "メカニズムデザイン理論の基礎の確立", plain: "望ましい結果を引き出すために、取引やルール（制度）をどう設計すればよいかを理論化した（メカニズムデザイン）。オークションや選挙制度の設計などに応用される。" }
    },
    note: "物理学の巨大磁気抵抗（GMR）はハードディスクの大容量化を可能にした技術。平和賞は気候変動対策への貢献でIPCCとアル・ゴアへ。"
  },
  {
    year: 2006,
    categories: {
      physics: { laureates: [{ name: "ジョン・マザー", en: "John Mather", country: "米国" }, { name: "ジョージ・スムート", en: "George Smoot", country: "米国" }], reason: "宇宙マイクロ波背景放射の黒体形とその非等方性の発見", plain: "宇宙に満ちる「ビッグバンの名残の光」を精密に観測した。そのわずかなムラが、のちに銀河や星が生まれるタネになったことを示し、ビッグバン理論を強く裏づけた。" },
      chemistry: { laureates: [{ name: "ロジャー・コーンバーグ", en: "Roger Kornberg", country: "米国" }], reason: "真核生物の転写の分子的基盤の研究", plain: "遺伝子（DNA）の情報が読み取られてコピー（RNA）が作られる「転写」の仕組みを、分子レベルで詳しく解明した。父も化学賞ではなく医学賞の受賞者という親子受賞でも知られる。" },
      medicine: { laureates: [{ name: "アンドリュー・ファイアー", en: "Andrew Fire", country: "米国" }, { name: "クレイグ・メロー", en: "Craig Mello", country: "米国" }], reason: "RNA干渉（二本鎖RNAによる遺伝子サイレンシング）の発見", plain: "特定の遺伝子の働きだけをピンポイントで止める仕組み（RNA干渉）を発見した。遺伝子の役割を調べる研究や、新しいタイプの薬の開発に使われている。" },
      literature: { laureates: [{ name: "オルハン・パムク", en: "Orhan Pamuk", country: "トルコ" }], reason: "故郷の街の憂愁を探る中で、文化の衝突と交錯の新たな象徴を発見した", plain: "トルコの作家。故郷イスタンブールを舞台に、東洋と西洋の文化が出会い、ぶつかる姿を描く。" },
      peace: { laureates: [{ name: "ムハマド・ユヌス", en: "Muhammad Yunus", country: "バングラデシュ" }, { name: "グラミン銀行", en: "Grameen Bank", country: "バングラデシュ" }], reason: "下からの経済的・社会的発展を生み出す努力（マイクロファイナンス）", plain: "貧しい人々に少額のお金を貸して自立を助ける「マイクロファイナンス」を広めた。ユヌスが作ったグラミン銀行とともに受賞した。" },
      economics: { laureates: [{ name: "エドムンド・フェルプス", en: "Edmund Phelps", country: "米国" }], reason: "マクロ経済政策における異時点間のトレードオフの分析", plain: "インフレを抑えることと失業を減らすことの間にある、今と将来のバランス（トレードオフ）を分析した。金融政策の考え方に影響を与えた。" }
    },
    note: "平和賞はマイクロファイナンス（少額融資）で貧困層の自立を支えたユヌスとグラミン銀行へ。"
  },
  {
    year: 2005,
    categories: {
      physics: { laureates: [{ name: "ロイ・グラウバー", en: "Roy Glauber", country: "米国" }, { name: "ジョン・ホール", en: "John Hall", country: "米国" }, { name: "テオドール・ヘンシュ", en: "Theodor Hänsch", country: "ドイツ" }], reason: "光のコヒーレンスの量子論への貢献、およびレーザー精密分光と光周波数コム技術への貢献", plain: "光の性質を量子論で説明し（グラウバー）、レーザーで光の振動数を極めて正確に測る技術（光コム）を開発した（ホール、ヘンシュ）。超高精度の時計やGPSの精度向上につながる。" },
      chemistry: { laureates: [{ name: "イヴ・ショーヴァン", en: "Yves Chauvin", country: "フランス" }, { name: "ロバート・グラブス", en: "Robert Grubbs", country: "米国" }, { name: "リチャード・シュロック", en: "Richard Schrock", country: "米国" }], reason: "有機合成におけるメタセシス法の開発", plain: "分子の一部同士を「パートナー交換」するように組み替える反応（メタセシス）を実用化した。無駄が少なく環境にやさしい方法で、医薬品やプラスチックづくりに使われる。" },
      medicine: { laureates: [{ name: "バリー・マーシャル", en: "Barry Marshall", country: "オーストラリア" }, { name: "ロビン・ウォーレン", en: "Robin Warren", country: "オーストラリア" }], reason: "ピロリ菌の発見と、胃炎・胃潰瘍における役割", plain: "胃潰瘍の原因がストレスではなく「ピロリ菌」という細菌だと突き止めた。常識外れの説だったため、マーシャルは自ら菌を飲んで発病させ証明した。今は抗菌薬で治せる病気になった。" },
      literature: { laureates: [{ name: "ハロルド・ピンター", en: "Harold Pinter", country: "英国" }], reason: "日常の雑談の下の断崖を暴き、抑圧の密室へ押し入る戯曲", plain: "イギリスの劇作家。何気ない会話の裏にひそむ緊張や不安、権力による抑圧を描く独特の作風で知られる。" },
      peace: { laureates: [{ name: "国際原子力機関（IAEA）", en: "IAEA", country: "国連" }, { name: "モハメド・エルバラダイ", en: "Mohamed ElBaradei", country: "エジプト" }], reason: "原子力の軍事利用防止と、平和利用の安全確保への努力", plain: "核が兵器に使われるのを防ぎ、原子力を安全に平和利用させるために活動する国際機関（IAEA）と、その事務局長が受賞した。" },
      economics: { laureates: [{ name: "ロバート・オーマン", en: "Robert Aumann", country: "米国・イスラエル" }, { name: "トーマス・シェリング", en: "Thomas Schelling", country: "米国" }], reason: "ゲーム理論分析による対立と協調の理解の深化", plain: "相手の出方を読み合う「ゲーム理論」を使って、なぜ人や国が対立したり協力したりするのかを分析した。冷戦の核抑止など、争いと協調の理解に役立った。" }
    },
    note: "生理学・医学は、胃潰瘍の原因がストレスではなく細菌（ピロリ菌）であることを証明した成果。マーシャルは自ら菌を飲んで実証した逸話で知られる。"
  },
  {
    year: 2004,
    categories: {
      physics: { laureates: [{ name: "デヴィッド・グロス", en: "David Gross", country: "米国" }, { name: "デヴィッド・ポリツァー", en: "David Politzer", country: "米国" }, { name: "フランク・ウィルチェック", en: "Frank Wilczek", country: "米国" }], reason: "強い相互作用の理論における漸近的自由の発見", plain: "原子核の中でクォークを結びつける「強い力」の不思議な性質を解明した。近いほど力が弱く、離れるほど強くなる（漸近的自由）という発見で、素粒子物理の理論を支えている。" },
      chemistry: { laureates: [{ name: "アーロン・チカノーバー", en: "Aaron Ciechanover", country: "イスラエル" }, { name: "アブラム・ハーシュコ", en: "Avram Hershko", country: "イスラエル" }, { name: "アーウィン・ローズ", en: "Irwin Rose", country: "米国" }], reason: "ユビキチンを介したタンパク質分解の発見", plain: "細胞が不要になったタンパク質に「廃棄マーク」をつけて分解する仕組みを解明した。細胞の中の掃除とリサイクルの仕組みで、病気の理解にもつながる。" },
      medicine: { laureates: [{ name: "リチャード・アクセル", en: "Richard Axel", country: "米国" }, { name: "リンダ・バック", en: "Linda Buck", country: "米国" }], reason: "嗅覚受容体と嗅覚系の組織化に関する発見", plain: "私たちがどうやって何千種類もの匂いをかぎ分けているのか、その仕組み（匂いのセンサーと脳での処理）を解明した。" },
      literature: { laureates: [{ name: "エルフリーデ・イェリネク", en: "Elfriede Jelinek", country: "オーストリア" }], reason: "社会のクリシェとその支配力の不条理を暴く、小説と戯曲における声の音楽的な流れ", plain: "オーストリアの作家。社会の決まり文句や、それが人を縛る不条理を、音楽的な言葉の流れで暴き出す。" },
      peace: { laureates: [{ name: "ワンガリ・マータイ", en: "Wangari Maathai", country: "ケニア" }], reason: "持続可能な開発、民主主義、平和への貢献", plain: "ケニアで植林運動「グリーンベルト運動」を率いた環境活動家。環境保護と民主主義・平和を結びつけた点が評価され、アフリカの女性で初の受賞者となった。" },
      economics: { laureates: [{ name: "フィン・キドランド", en: "Finn Kydland", country: "ノルウェー" }, { name: "エドワード・プレスコット", en: "Edward Prescott", country: "米国" }], reason: "動学的マクロ経済学への貢献（経済政策の時間整合性と景気変動の原動力）", plain: "政府や中央銀行の政策は、約束通り続けられるかどうかで効果が変わることを示した。また景気の波がなぜ起きるかを分析し、現代の経済政策論の土台を作った。" }
    },
    note: "平和賞のワンガリ・マータイはアフリカの女性初の受賞者で、植林運動「グリーンベルト運動」で知られる。"
  },
  {
    year: 2003,
    categories: {
      physics: { laureates: [{ name: "アレクセイ・アブリコソフ", en: "Alexei Abrikosov", country: "ロシア・米国" }, { name: "ヴィタリー・ギンツブルク", en: "Vitaly Ginzburg", country: "ロシア" }, { name: "アンソニー・レゲット", en: "Anthony Leggett", country: "英国・米国" }], reason: "超伝導と超流動の理論への先駆的貢献", plain: "電気抵抗がゼロになる「超伝導」や、摩擦なく流れる「超流動」という、極低温で起こる不思議な現象の理論を築いた。リニアモーターカーやMRIの強力磁石などにつながる。" },
      chemistry: { laureates: [{ name: "ピーター・アグレ", en: "Peter Agre", country: "米国" }, { name: "ロデリック・マキノン", en: "Roderick MacKinnon", country: "米国" }], reason: "細胞膜のチャネルに関する発見（水チャネルの発見、イオンチャネルの構造・機構の研究）", plain: "細胞の膜にある、水や特定の物質だけを通す「通り道（チャネル）」の仕組みを解明した。腎臓や神経の働きの理解に重要。" },
      medicine: { laureates: [{ name: "ポール・ラウターバー", en: "Paul Lauterbur", country: "米国" }, { name: "ピーター・マンスフィールド", en: "Peter Mansfield", country: "英国" }], reason: "磁気共鳴画像法（MRI）に関する発見", plain: "体を切らずに内部を鮮明に映し出す検査装置「MRI」のもとになる技術を開発した。今では脳や関節など、あらゆる部位の診断に欠かせない。" },
      literature: { laureates: [{ name: "ジョン・マクスウェル・クッツェー", en: "J.M. Coetzee", country: "南アフリカ" }], reason: "無数の姿で部外者の意外な関与を描いた", plain: "南アフリカ出身の作家。社会から疎外された「よそ者」の姿を、さまざまな形で描き出す。" },
      peace: { laureates: [{ name: "シリン・エバディ", en: "Shirin Ebadi", country: "イラン" }], reason: "民主主義と人権、特に女性と子どもの権利のための努力", plain: "イランの弁護士・人権活動家。特に女性と子どもの権利を守る活動に力を尽くした。イスラム圏の女性で初の受賞者。" },
      economics: { laureates: [{ name: "ロバート・エングル", en: "Robert Engle", country: "米国" }, { name: "クライブ・グレンジャー", en: "Clive Granger", country: "英国" }], reason: "時変的ボラティリティ（ARCH）を持つ経済時系列の分析手法、および共和分を持つ経済時系列の分析手法", plain: "株価などの「値動きの激しさ」が時間とともに変わることを分析する手法（エングル）や、複数の経済データの長期的な関係を見る手法（グレンジャー）を開発した。金融のリスク予測などに使われる。" }
    },
    note: "生理学・医学は医療診断に不可欠なMRIの開発への授賞。平和賞のシリン・エバディはイスラム圏の女性で初の受賞者。"
  },
  {
    year: 2002,
    categories: {
      physics: { laureates: [{ name: "レイモンド・デイヴィス", en: "Raymond Davis Jr.", country: "米国" }, { name: "小柴昌俊", en: "Masatoshi Koshiba", country: "日本" }, { name: "リカルド・ジャッコーニ", en: "Riccardo Giacconi", country: "イタリア・米国" }], reason: "宇宙ニュートリノの検出など天体物理学への先駆的貢献、および宇宙X線源の発見につながる貢献", plain: "宇宙から降り注ぐ素粒子ニュートリノ（小柴氏がカミオカンデで観測）や、宇宙のX線を捉え、光とは違う方法で宇宙を調べる「ニュートリノ天文学・X線天文学」を切り開いた。" },
      chemistry: { laureates: [{ name: "ジョン・フェン", en: "John Fenn", country: "米国" }, { name: "田中耕一", en: "Koichi Tanaka", country: "日本" }, { name: "クルト・ヴュートリッヒ", en: "Kurt Wüthrich", country: "スイス" }], reason: "生体高分子の同定・構造解析手法の開発（質量分析のソフト脱離イオン化法、溶液中のNMR法）", plain: "タンパク質のような壊れやすい巨大分子を、壊さずに種類や形を調べる方法を開発した。田中耕一氏は当時企業の一会社員で、学位も持たない受賞に世間が驚いた。" },
      medicine: { laureates: [{ name: "シドニー・ブレナー", en: "Sydney Brenner", country: "南アフリカ" }, { name: "ロバート・ホロヴィッツ", en: "H. Robert Horvitz", country: "米国" }, { name: "ジョン・サルストン", en: "John Sulston", country: "英国" }], reason: "器官発生とプログラム細胞死の遺伝的制御に関する発見", plain: "体が作られる過程で、不要な細胞があらかじめ決められた通りに死んでいく「プログラムされた細胞死」の仕組みを、線虫を使って解明した。がん研究などの土台になっている。" },
      literature: { laureates: [{ name: "ケルテース・イムレ", en: "Imre Kertész", country: "ハンガリー" }], reason: "歴史の野蛮な恣意性に抗して、個人の脆い経験を支える作品", plain: "ハンガリーの作家。自身のアウシュヴィッツ収容所での体験をもとに、歴史の暴力に翻弄される個人を描いた。" },
      peace: { laureates: [{ name: "ジミー・カーター", en: "Jimmy Carter", country: "米国" }], reason: "数十年にわたる国際紛争の平和的解決、民主主義と人権、経済社会発展を推進する努力", plain: "アメリカの元大統領。退任後も数十年にわたり、世界各地の紛争調停や人権・民主主義の推進に力を尽くした功績で受賞した。" },
      economics: { laureates: [{ name: "ダニエル・カーネマン", en: "Daniel Kahneman", country: "イスラエル・米国" }, { name: "バーノン・スミス", en: "Vernon Smith", country: "米国" }], reason: "心理学的洞察を経済学に統合（特に不確実性下の判断と意思決定）、および実験を実証的経済分析の手法として確立", plain: "人は必ずしも合理的に判断しない、という心理学の知見を経済学に持ち込んだ（カーネマン）。『ファスト＆スロー』の著者で、行動経済学の基礎を築いた。" }
    },
    note: "化学の田中耕一氏は当時企業の一研究者で、学位も持たない受賞者として大きな驚きをもって迎えられた。物理学の小柴昌俊氏はニュートリノ観測（カミオカンデ）で受賞。"
  },
  {
    year: 2001,
    categories: {
      physics: { laureates: [{ name: "エリック・コーネル", en: "Eric Cornell", country: "米国" }, { name: "カール・ワイマン", en: "Carl Wieman", country: "米国" }, { name: "ヴォルフガング・ケターレ", en: "Wolfgang Ketterle", country: "ドイツ" }], reason: "アルカリ原子の希薄気体におけるボース＝アインシュタイン凝縮の達成と、その性質の基礎研究", plain: "原子を絶対零度近くまで冷やすと、多数の原子がまるで1個のように振る舞う特殊な状態（ボース＝アインシュタイン凝縮）を初めて実現した。約70年前の予言を実験で確かめた成果。" },
      chemistry: { laureates: [{ name: "ウィリアム・ノウルズ", en: "William Knowles", country: "米国" }, { name: "野依良治", en: "Ryōji Noyori", country: "日本" }, { name: "バリー・シャープレス", en: "K. Barry Sharpless", country: "米国" }], reason: "不斉触媒による水素化反応、および不斉触媒による酸化反応", plain: "右手型・左手型のように鏡写しの関係にある分子のうち、欲しい方だけを作り分ける触媒を開発した。野依良治氏が貢献し、医薬品の製造などに広く使われている。" },
      medicine: { laureates: [{ name: "リーランド・ハートウェル", en: "Leland Hartwell", country: "米国" }, { name: "ティム・ハント", en: "Tim Hunt", country: "英国" }, { name: "ポール・ナース", en: "Paul Nurse", country: "英国" }], reason: "細胞周期の主要な制御因子の発見", plain: "細胞が分裂して増えるときの「進行を制御するアクセルとブレーキ」の仕組みを解明した。細胞が無秩序に増えるがんの理解につながる。" },
      literature: { laureates: [{ name: "V.S.ナイポール", en: "V.S. Naipaul", country: "英国・トリニダード" }], reason: "鋭い語りと妥協なき精査を結びつけ、抑圧された歴史の存在を直視させた作品", plain: "トリニダード出身・英国の作家。植民地のその後の社会や、見過ごされてきた歴史を鋭く見つめる作品で知られる。" },
      peace: { laureates: [{ name: "国際連合（UN）", en: "United Nations", country: "国連" }, { name: "コフィ・アナン", en: "Kofi Annan", country: "ガーナ" }], reason: "より良く組織された、より平和な世界のための働き", plain: "世界の平和と協調のために働く国連と、その事務総長コフィ・アナンが受賞した。国連創設からの活動が改めて評価された。" },
      economics: { laureates: [{ name: "ジョージ・アカロフ", en: "George Akerlof", country: "米国" }, { name: "マイケル・スペンス", en: "Michael Spence", country: "米国" }, { name: "ジョセフ・スティグリッツ", en: "Joseph Stiglitz", country: "米国" }], reason: "情報の非対称性を持つ市場の分析", plain: "売り手と買い手が持つ情報に差がある（例：中古車の本当の状態は売り手しか知らない）と、市場がうまく働かなくなることを分析した。保険や金融の理解に影響を与えた。" }
    },
    note: "化学で野依良治氏が不斉合成（左右の鏡像のうち一方だけを選んで合成する手法）で受賞。医薬品製造などに広く応用される。"
  },
  {
    year: 2000,
    categories: {
      physics: { laureates: [{ name: "ジョレス・アルフョーロフ", en: "Zhores Alferov", country: "ロシア" }, { name: "ヘルベルト・クレーマー", en: "Herbert Kroemer", country: "ドイツ" }, { name: "ジャック・キルビー", en: "Jack Kilby", country: "米国" }], reason: "高速・光エレクトロニクス用半導体ヘテロ構造の開発、および集積回路（IC）の発明への貢献", plain: "高速通信やLEDに使う半導体の基礎を築き（アルフョーロフ、クレーマー）、電子回路を1枚のチップに収める集積回路（IC）を発明した（キルビー）。現代のあらゆる電子機器の土台。" },
      chemistry: { laureates: [{ name: "アラン・ヒーガー", en: "Alan Heeger", country: "米国" }, { name: "アラン・マクダイアミッド", en: "Alan MacDiarmid", country: "ニュージーランド・米国" }, { name: "白川英樹", en: "Hideki Shirakawa", country: "日本" }], reason: "導電性高分子の発見と開発", plain: "電気を通さないはずのプラスチックに、電気を通す性質を持たせることに成功した。白川英樹氏が発見。有機ELディスプレイなどに応用されている。" },
      medicine: { laureates: [{ name: "アルビド・カールソン", en: "Arvid Carlsson", country: "スウェーデン" }, { name: "ポール・グリーンガード", en: "Paul Greengard", country: "米国" }, { name: "エリック・カンデル", en: "Eric Kandel", country: "オーストリア・米国" }], reason: "神経系における信号伝達に関する発見", plain: "脳の神経細胞どうしが信号をやり取りする仕組みを解明した。パーキンソン病の治療やうつ病の薬、記憶の仕組みの理解につながった。" },
      literature: { laureates: [{ name: "高行健", en: "Gao Xingjian", country: "フランス・中国" }], reason: "普遍的な妥当性と苦い洞察、言語的独創性で、中国の小説と戯曲に新たな道を開いた作品", plain: "中国出身でフランスに亡命した作家。中国語の小説・戯曲に新しい表現を開いた。中国語作家で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "金大中", en: "Kim Dae-jung", country: "韓国" }], reason: "韓国と東アジアの民主主義と人権、特に北朝鮮との平和と和解への働き", plain: "韓国の大統領。民主化に尽くし、北朝鮮との和解を目指す「太陽政策」を進めた功績で受賞した。" },
      economics: { laureates: [{ name: "ジェームズ・ヘックマン", en: "James Heckman", country: "米国" }, { name: "ダニエル・マクファデン", en: "Daniel McFadden", country: "米国" }], reason: "選択的標本の分析の理論と手法の開発、および離散選択の分析の理論と手法の開発", plain: "アンケートなどの偏ったデータから正しい結論を導く方法や、人が「どれを選ぶか」を分析する手法を開発した。労働や交通など、現実データの分析に広く使われる。" }
    },
    note: "化学で白川英樹氏が「電気を通すプラスチック（導電性高分子）」で受賞。物理学のキルビーは集積回路（IC）の発明者で、現代のあらゆる電子機器の基礎を築いた。"
  },
  {
    year: 1999,
    categories: {
      physics: { laureates: [{ name: "ヘーラルト・トホーフト", en: "Gerard 't Hooft", country: "オランダ" }, { name: "マルティヌス・フェルトマン", en: "Martinus Veltman", country: "オランダ" }], reason: "物理学における電弱相互作用の量子構造の解明", plain: "素粒子の基本法則「標準模型」を、計算が破綻しないきちんとした理論として成り立たせた。素粒子物理学の土台を数学的に固めた成果。" },
      chemistry: { laureates: [{ name: "アハメッド・ズウェイル", en: "Ahmed Zewail", country: "エジプト・米国" }], reason: "フェムト秒分光法による化学反応の遷移状態の研究", plain: "ごく短い時間（フェムト秒＝1000兆分の1秒）だけ光るレーザーを使い、化学反応が進む瞬間をコマ送りで観察する手法を開発した。『化学反応のスローモーション撮影』ともいえる。" },
      medicine: { laureates: [{ name: "ギュンター・ブローベル", en: "Günter Blobel", country: "米国" }], reason: "タンパク質が細胞内の輸送と局在を支配する固有のシグナルを持つという発見", plain: "細胞の中で作られたタンパク質が、行き先を示す『宛名ラベル』のような目印を持っていて、正しい場所に届けられる仕組みを解明した。" },
      literature: { laureates: [{ name: "ギュンター・グラス", en: "Günter Grass", country: "ドイツ" }], reason: "軽妙な黒い寓話で歴史の忘れられた顔を描いた", plain: "『ブリキの太鼓』で知られるドイツの作家。ナチス時代など、ドイツ人が忘れたい過去を風刺と寓話をまじえて描いた。" },
      peace: { laureates: [{ name: "国境なき医師団", en: "Médecins Sans Frontières", country: "スイス" }], reason: "各大陸における先駆的な人道活動", plain: "紛争地や被災地に駆けつけ、国の枠を超えて医療を届ける民間団体。世界各地での人道支援活動が評価された。" },
      economics: { laureates: [{ name: "ロバート・マンデル", en: "Robert Mundell", country: "カナダ" }], reason: "異なる為替相場制度下での金融・財政政策の分析と、最適通貨圏の分析", plain: "為替レートの仕組みのもとで金融・財政政策がどう効くかを分析した。複数の国が共通通貨を使う条件を示した研究は『ユーロの父』と呼ばれる基礎になった。" }
    },
    note: "物理学のトホーフト・フェルトマンは素粒子の標準模型を数学的に成り立たせた理論で受賞。経済学のマンデルは「ユーロの父」とも呼ばれる。"
  },
  {
    year: 1998,
    categories: {
      physics: { laureates: [{ name: "ロバート・ラフリン", en: "Robert Laughlin", country: "米国" }, { name: "ホルスト・シュテルマー", en: "Horst Störmer", country: "ドイツ" }, { name: "ダニエル・ツイ", en: "Daniel Tsui", country: "米国" }], reason: "分数電荷の励起を伴う新しい量子流体の発見（分数量子ホール効果）", plain: "強い磁場の中で電子が集まると、あたかも『電子の一部分』のような不思議な性質を示す新しい状態が生まれることを発見した。量子の世界の奥深さを示す成果。" },
      chemistry: { laureates: [{ name: "ウォルター・コーン", en: "Walter Kohn", country: "オーストリア・米国" }, { name: "ジョン・ポープル", en: "John Pople", country: "英国" }], reason: "密度汎関数理論の開発、および量子化学における計算手法の開発", plain: "分子の性質や反応をコンピュータで計算する理論と手法を作った。実験しなくても分子の振る舞いを予測でき、今の化学・材料研究に欠かせない。" },
      medicine: { laureates: [{ name: "ロバート・ファーチゴット", en: "Robert Furchgott", country: "米国" }, { name: "ルイス・イグナロ", en: "Louis Ignarro", country: "米国" }, { name: "フェリド・ムラド", en: "Ferid Murad", country: "米国" }], reason: "循環器系におけるシグナル分子としての一酸化窒素に関する発見", plain: "一酸化窒素という気体が、体の中で血管を広げる『信号』の役目をしていることを発見した。狭心症の薬や、バイアグラの開発につながった。" },
      literature: { laureates: [{ name: "ジョゼ・サラマーゴ", en: "José Saramago", country: "ポルトガル" }], reason: "想像力・共感・皮肉に支えられた寓話で、捉えがたい現実を繰り返し把握させる作品", plain: "ポルトガルの作家。『白の闇（白の盲目）』など、想像力と皮肉に富んだ寓話で人間社会を描いた。" },
      peace: { laureates: [{ name: "ジョン・ヒューム", en: "John Hume", country: "アイルランド" }, { name: "デイヴィッド・トリンブル", en: "David Trimble", country: "英国" }], reason: "北アイルランド紛争の平和的解決への努力", plain: "長く流血が続いた北アイルランド紛争を、話し合いで解決へ導いた2人の政治家。和平合意の実現に貢献した。" },
      economics: { laureates: [{ name: "アマルティア・セン", en: "Amartya Sen", country: "インド" }], reason: "厚生経済学への貢献", plain: "飢饉や貧困がなぜ起きるのかを、食料不足だけでなく社会の仕組みから分析した。弱い立場の人に光を当て『経済学の良心』と呼ばれる。" }
    },
    note: "医学の一酸化窒素（NO）研究は、血管を広げる仕組みの解明でバイアグラ開発などにつながった。経済学のアマルティア・センは飢饉や貧困を分析し「経済学の良心」と呼ばれる。"
  },
  {
    year: 1997,
    categories: {
      physics: { laureates: [{ name: "スティーブン・チュー", en: "Steven Chu", country: "米国" }, { name: "クロード・コーエン＝タヌージ", en: "Claude Cohen-Tannoudji", country: "フランス" }, { name: "ウィリアム・フィリップス", en: "William Phillips", country: "米国" }], reason: "レーザー光で原子を冷却し捕捉する手法の開発", plain: "レーザー光を使って原子の動きを止め、絶対零度近くまで冷やして閉じ込める手法を開発した。超高精度の原子時計や、原子の研究に欠かせない技術になった。" },
      chemistry: { laureates: [{ name: "ポール・ボイヤー", en: "Paul Boyer", country: "米国" }, { name: "ジョン・ウォーカー", en: "John Walker", country: "英国" }, { name: "イェンス・スコウ", en: "Jens Skou", country: "デンマーク" }], reason: "ATP合成の酵素的機構の解明、およびイオン輸送酵素Na+,K+-ATPaseの発見", plain: "生き物のエネルギー通貨『ATP』が体内でどう作られるか、その回転する分子の仕組みを解明した。また細胞内外の塩分バランスを保つポンプも発見した。" },
      medicine: { laureates: [{ name: "スタンリー・プルシナー", en: "Stanley Prusiner", country: "米国" }], reason: "新しい感染の生物学的原理であるプリオンの発見", plain: "遺伝子を持たず、タンパク質だけで病気を広げる新種の病原体『プリオン』を発見した。狂牛病（BSE）などの原因の理解につながった。当初は信じられず批判も受けた。" },
      literature: { laureates: [{ name: "ダリオ・フォ", en: "Dario Fo", country: "イタリア" }], reason: "中世の道化師にならい、権威を風刺し虐げられた者の尊厳を守った", plain: "イタリアの劇作家・俳優。中世の道化師のように権力を笑い飛ばし、弱い者の側に立つ風刺劇で知られる。" },
      peace: { laureates: [{ name: "地雷禁止国際キャンペーン（ICBL）", en: "ICBL", country: "スイス" }, { name: "ジョディ・ウィリアムズ", en: "Jody Williams", country: "米国" }], reason: "対人地雷の禁止と除去に向けた活動", plain: "戦後も地中に残り民間人を傷つけ続ける対人地雷の禁止を訴え、地雷禁止条約の成立を後押しした市民運動と、その中心人物。" },
      economics: { laureates: [{ name: "ロバート・マートン", en: "Robert Merton", country: "米国" }, { name: "マイロン・ショールズ", en: "Myron Scholes", country: "カナダ・米国" }], reason: "デリバティブの価値を決定する新しい手法（ブラック・ショールズ式）", plain: "将来の売買の権利（オプション）など、複雑な金融商品の適正な値段を計算する公式を作った。現代の金融取引の土台になっている。" }
    },
    note: "医学のプリオンは、タンパク質だけで感染する病原体という常識破りの概念で、狂牛病の理解につながった。経済学のショールズらの式は金融工学の基礎になった。"
  },
  {
    year: 1996,
    categories: {
      physics: { laureates: [{ name: "デヴィッド・リー", en: "David Lee", country: "米国" }, { name: "ダグラス・オシェロフ", en: "Douglas Osheroff", country: "米国" }, { name: "ロバート・リチャードソン", en: "Robert Richardson", country: "米国" }], reason: "ヘリウム3の超流動の発見", plain: "ヘリウムの一種を極低温に冷やすと、摩擦ゼロでどこまでも流れ続ける『超流動』という不思議な状態になることを発見した。量子の効果が目に見える形で現れる現象。" },
      chemistry: { laureates: [{ name: "ロバート・カール", en: "Robert Curl", country: "米国" }, { name: "ハロルド・クロトー", en: "Harold Kroto", country: "英国" }, { name: "リチャード・スモーリー", en: "Richard Smalley", country: "米国" }], reason: "フラーレンの発見", plain: "60個の炭素原子がサッカーボールのような形に並んだ新しい分子『フラーレン』を発見した。筒状のカーボンナノチューブなど、ナノテクノロジーの先駆けとなった。" },
      medicine: { laureates: [{ name: "ピーター・ドハティ", en: "Peter Doherty", country: "オーストラリア" }, { name: "ロルフ・ツィンカーナーゲル", en: "Rolf Zinkernagel", country: "スイス" }], reason: "細胞性免疫防御の特異性に関する発見", plain: "免疫細胞が、ウイルスに感染した自分の細胞をどうやって見分けて攻撃するのか、その仕組みを解明した。ワクチンや免疫の理解に重要。" },
      literature: { laureates: [{ name: "ヴィスワヴァ・シンボルスカ", en: "Wisława Szymborska", country: "ポーランド" }], reason: "皮肉な精緻さで、人間の現実の断片に歴史的・生物学的文脈を浮かび上がらせる詩", plain: "ポーランドの詩人。身近な題材を、皮肉とユーモア、鋭い観察で描く平明な詩で親しまれた。" },
      peace: { laureates: [{ name: "カルロス・ベロ", en: "Carlos Belo", country: "東ティモール" }, { name: "ジョゼ・ラモス＝ホルタ", en: "José Ramos-Horta", country: "東ティモール" }], reason: "東ティモール紛争の公正で平和的な解決に向けた活動", plain: "インドネシア支配下にあった東ティモールの独立と平和的解決に尽くした司教と活動家。のちの独立につながった。" },
      economics: { laureates: [{ name: "ジェームズ・マーリーズ", en: "James Mirrlees", country: "英国" }, { name: "ウィリアム・ヴィックリー", en: "William Vickrey", country: "カナダ・米国" }], reason: "情報の非対称性のもとでのインセンティブの経済理論への基礎的貢献", plain: "政府や企業が相手の事情を完全には知らない状況で、どう税制や契約を設計すればうまく機能するかを理論化した。所得税やオークション設計の考え方に影響を与えた。" }
    },
    note: "化学のフラーレン（C60、サッカーボール状の炭素分子）の発見はナノテクノロジーの先駆けとなった。"
  },
  {
    year: 1995,
    categories: {
      physics: { laureates: [{ name: "マーティン・パール", en: "Martin Perl", country: "米国" }, { name: "フレデリック・ライネス", en: "Frederick Reines", country: "米国" }], reason: "タウ粒子の発見、およびニュートリノの検出（レプトン物理学への先駆的実験的貢献）", plain: "物質を形づくる基本粒子の仲間（レプトン）である『タウ粒子』を発見し、また捉えにくい素粒子ニュートリノを初めて実験で検出した。素粒子の全体像の理解を進めた。" },
      chemistry: { laureates: [{ name: "パウル・クルッツェン", en: "Paul Crutzen", country: "オランダ" }, { name: "マリオ・モリーナ", en: "Mario Molina", country: "メキシコ" }, { name: "フランク・ローランド", en: "F. Sherwood Rowland", country: "米国" }], reason: "大気化学、特にオゾンの生成と分解に関する研究", plain: "フロンガスが上空のオゾン層を破壊することを明らかにした。地球を有害な紫外線から守るオゾン層の危機を警告し、国際的な規制（フロン全廃）につながった。" },
      medicine: { laureates: [{ name: "エドワード・ルイス", en: "Edward Lewis", country: "米国" }, { name: "クリスティアーネ・ニュスライン＝フォルハルト", en: "Christiane Nüsslein-Volhard", country: "ドイツ" }, { name: "エリック・ウィーシャウス", en: "Eric Wieschaus", country: "米国" }], reason: "初期胚発生の遺伝的制御に関する発見", plain: "受精卵から体ができていくとき、どの遺伝子が頭・胴・足などの配置を決めているのかを解明した。生き物の体づくりの基本ルールを明らかにした。" },
      literature: { laureates: [{ name: "シェイマス・ヒーニー", en: "Seamus Heaney", country: "アイルランド" }], reason: "日常の奇跡と生き続ける過去を讃える、叙情的な美と倫理的深みを持つ作品", plain: "アイルランドの詩人。故郷の農村の暮らしや歴史を、美しく深みのある言葉でうたった。" },
      peace: { laureates: [{ name: "ジョセフ・ロートブラット", en: "Joseph Rotblat", country: "ポーランド・英国" }, { name: "パグウォッシュ会議", en: "Pugwash Conferences", country: "カナダ" }], reason: "国際政治における核兵器の役割を減らし、ゆくゆくは廃絶する努力", plain: "核兵器の廃絶を訴えてきた物理学者と、科学者たちの国際会議。核開発に関わった科学者が、その危険を減らすために活動した。" },
      economics: { laureates: [{ name: "ロバート・ルーカス", en: "Robert Lucas Jr.", country: "米国" }], reason: "合理的期待仮説の発展と応用によるマクロ経済分析の変革", plain: "人々は将来を予想して行動するので、その予想を考えに入れないと政策の効果を読み違える、という考え（合理的期待）でマクロ経済学を大きく変えた。" }
    },
    note: "化学のオゾン層破壊の研究は、フロンによるオゾンホールの仕組みを解明し、国際的な環境規制（モントリオール議定書）を後押しした。"
  },
  {
    year: 1994,
    categories: {
      physics: { laureates: [{ name: "バートラム・ブロックハウス", en: "Bertram Brockhouse", country: "カナダ" }, { name: "クリフォード・シャル", en: "Clifford Shull", country: "米国" }], reason: "中性子分光法および中性子回折技術の開発（物性研究への先駆的貢献）", plain: "中性子を物質に当てて、原子がどう並び、どう振動しているかを調べる手法を開発した。新素材の研究などに広く使われる基礎技術。" },
      chemistry: { laureates: [{ name: "ジョージ・オラー", en: "George Olah", country: "ハンガリー・米国" }], reason: "カルボカチオン化学への貢献", plain: "ごく一瞬しか存在しない、プラスの電気を帯びた不安定な分子（カルボカチオン）を安定に捉えて研究する方法を確立した。石油の精製など化学工業の理解に役立つ。" },
      medicine: { laureates: [{ name: "アルフレッド・ギルマン", en: "Alfred Gilman", country: "米国" }, { name: "マーティン・ロッドベル", en: "Martin Rodbell", country: "米国" }], reason: "Gタンパク質と、細胞内のシグナル伝達におけるその役割の発見", plain: "細胞が外からの信号を受け取って内部に伝えるときの『仲介役』となるタンパク質（Gタンパク質）を発見した。多くの薬が関わる重要な仕組み。" },
      literature: { laureates: [{ name: "大江健三郎", en: "Kenzaburō Ōe", country: "日本" }], reason: "詩的な力で想像の世界を創り、生と神話が凝縮して現代人の困難な状況を描く", plain: "川端康成に続く日本人2人目のノーベル文学賞。障害のある息子との関わりや戦後日本をテーマに、独特の想像力で現代人の姿を描いた。" },
      peace: { laureates: [{ name: "ヤーセル・アラファト", en: "Yasser Arafat", country: "パレスチナ" }, { name: "イツハク・ラビン", en: "Yitzhak Rabin", country: "イスラエル" }, { name: "シモン・ペレス", en: "Shimon Peres", country: "イスラエル" }], reason: "中東和平を実現する努力（オスロ合意）", plain: "長く対立してきたパレスチナとイスラエルの指導者たちが、和平（オスロ合意）に踏み出したことで受賞した。" },
      economics: { laureates: [{ name: "ジョン・ハーサニ", en: "John Harsanyi", country: "ハンガリー・米国" }, { name: "ジョン・ナッシュ", en: "John Nash", country: "米国" }, { name: "ラインハルト・ゼルテン", en: "Reinhard Selten", country: "ドイツ" }], reason: "非協力ゲーム理論における均衡の先駆的分析", plain: "お互いが自分の利益を追う中でどんな状態に落ち着くか（ナッシュ均衡）を分析した。ナッシュは映画『ビューティフル・マインド』のモデルとしても知られる。" }
    },
    note: "文学で大江健三郎氏が日本人2人目の受賞。経済学のジョン・ナッシュは映画『ビューティフル・マインド』のモデルで、ゲーム理論の「ナッシュ均衡」で知られる。"
  },
  {
    year: 1993,
    categories: {
      physics: { laureates: [{ name: "ラッセル・ハルス", en: "Russell Hulse", country: "米国" }, { name: "ジョセフ・テイラー", en: "Joseph Taylor Jr.", country: "米国" }], reason: "新種のパルサーの発見（重力研究の新たな可能性を開いた）", plain: "2つの中性子星が回り合う特殊な天体（連星パルサー）を発見した。その観測から重力波の存在が間接的に裏づけられ、重力の研究に新しい道を開いた。" },
      chemistry: { laureates: [{ name: "キャリー・マリス", en: "Kary Mullis", country: "米国" }, { name: "マイケル・スミス", en: "Michael Smith", country: "英国・カナダ" }], reason: "ポリメラーゼ連鎖反応（PCR）法の発明、および部位特異的変異導入法への貢献", plain: "ごくわずかなDNAを短時間で大量に増やす『PCR法』を発明した。犯罪捜査の鑑定、遺伝子研究、新型コロナの検査など、現代に欠かせない技術になった。" },
      medicine: { laureates: [{ name: "リチャード・ロバーツ", en: "Richard Roberts", country: "英国" }, { name: "フィリップ・シャープ", en: "Phillip Sharp", country: "米国" }], reason: "分断遺伝子（スプリット遺伝子）の発見", plain: "遺伝子が、意味のある部分と間に挟まる不要な部分に分かれていて、使うときに不要部分を切り取ってつなぐことを発見した。遺伝子の働き方の常識を変えた。" },
      literature: { laureates: [{ name: "トニ・モリソン", en: "Toni Morrison", country: "米国" }], reason: "先見的な力と詩的な含蓄を持つ小説で、アメリカの現実の本質的側面に生命を与えた", plain: "アメリカの作家。奴隷制など黒人が経験した歴史と現実を、詩的で力強い小説で描いた。黒人女性で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "ネルソン・マンデラ", en: "Nelson Mandela", country: "南アフリカ" }, { name: "フレデリック・デクラーク", en: "F.W. de Klerk", country: "南アフリカ" }], reason: "アパルトヘイト体制の平和的終結と、新しい民主的な南アフリカの基礎を築いた働き", plain: "南アフリカの人種隔離政策（アパルトヘイト）を平和的に終わらせた2人。長く投獄されたマンデラと、政策を撤廃した大統領デクラークが協力した。" },
      economics: { laureates: [{ name: "ロバート・フォーゲル", en: "Robert Fogel", country: "米国" }, { name: "ダグラス・ノース", en: "Douglass North", country: "米国" }], reason: "経済理論と計量的手法を応用して経済史研究を刷新した功績", plain: "歴史上の出来事（鉄道の普及や奴隷制など）を、データと経済理論を使って数量的に分析する新しい経済史の手法を打ち立てた。" }
    },
    note: "化学のPCR法は、わずかなDNAを大量に増幅する技術で、遺伝子解析やコロナ検査など現代の分子生物学に不可欠。平和賞はアパルトヘイト撤廃を成し遂げたマンデラとデクラークへ。"
  },
  {
    year: 1992,
    categories: {
      physics: { laureates: [{ name: "ジョルジュ・シャルパク", en: "Georges Charpak", country: "フランス" }], reason: "粒子検出器、特に多線式比例計数管の発明と開発", plain: "素粒子が通った跡を素早く電子的に捉える検出器を発明した。素粒子実験を飛躍的に効率化し、医療の画像診断にも応用された。" },
      chemistry: { laureates: [{ name: "ルドルフ・マーカス", en: "Rudolph Marcus", country: "カナダ・米国" }], reason: "化学系における電子移動反応の理論への貢献（マーカス理論）", plain: "分子から分子へ電子が移る反応がどれくらいの速さで起きるかを説明する理論を作った。光合成や電池、さびる反応など幅広い現象の理解に役立つ。" },
      medicine: { laureates: [{ name: "エドモンド・フィッシャー", en: "Edmond Fischer", country: "スイス・米国" }, { name: "エドウィン・クレブス", en: "Edwin Krebs", country: "米国" }], reason: "生物学的制御機構としての可逆的タンパク質リン酸化に関する発見", plain: "タンパク質に小さな目印（リン酸）を付けたり外したりして、細胞の働きをオン・オフする仕組みを発見した。多くの病気に関わる基本的な調節のしくみ。" },
      literature: { laureates: [{ name: "デレック・ウォルコット", en: "Derek Walcott", country: "セントルシア" }], reason: "歴史的視野に支えられ、多文化への献身から生まれた、きわめて輝かしい詩的作品", plain: "カリブ海の島国出身の詩人。植民地の歴史や多文化が交わる自らのルーツを、豊かな言葉でうたった。" },
      peace: { laureates: [{ name: "リゴベルタ・メンチュウ", en: "Rigoberta Menchú", country: "グアテマラ" }], reason: "先住民の権利の尊重に基づく社会正義と民族文化的和解のための闘い", plain: "グアテマラの先住民出身の活動家。弾圧されてきた先住民の権利と、社会の和解を求めて非暴力で闘った。" },
      economics: { laureates: [{ name: "ゲイリー・ベッカー", en: "Gary Becker", country: "米国" }], reason: "ミクロ経済分析を、市場外の行動を含む人間行動の幅広い領域に拡張した功績", plain: "結婚・子育て・教育・犯罪など、お金のやり取りではない人間の行動も経済学で分析できることを示した。経済学の対象を大きく広げた。" }
    },
    note: "経済学のベッカーは、犯罪・結婚・差別など従来は経済学の対象外だった人間行動を経済学的に分析した。"
  },
  {
    year: 1991,
    categories: {
      physics: { laureates: [{ name: "ピエール＝ジル・ド・ジェンヌ", en: "Pierre-Gilles de Gennes", country: "フランス" }], reason: "単純な系の秩序現象の研究手法を、液晶や高分子などより複雑な物質に一般化できることの発見", plain: "単純な物質で使われてきた物理の考え方を、液晶やプラスチック（高分子）といった複雑な物質にも応用できることを示した。液晶ディスプレイの理解などにつながる。" },
      chemistry: { laureates: [{ name: "リヒャルト・エルンスト", en: "Richard Ernst", country: "スイス" }], reason: "高分解能核磁気共鳴（NMR）分光法の方法論の発展への貢献", plain: "分子の構造を精密に調べる『NMR（核磁気共鳴）』の性能を大きく高めた。医療のMRIや、タンパク質の構造解析の基礎になっている。" },
      medicine: { laureates: [{ name: "エルヴィン・ネーアー", en: "Erwin Neher", country: "ドイツ" }, { name: "ベルト・ザクマン", en: "Bert Sakmann", country: "ドイツ" }], reason: "細胞における単一イオンチャネルの機能に関する発見", plain: "細胞膜にある、イオン（電気を帯びた粒子）を通す極小の通り道を1個ずつ測る技術を開発した。神経や筋肉が電気信号で働く仕組みの解明につながった。" },
      literature: { laureates: [{ name: "ナディン・ゴーディマ", en: "Nadine Gordimer", country: "南アフリカ" }], reason: "壮大な叙事的作品を通じて人類に大きく貢献した", plain: "南アフリカの作家。アパルトヘイト（人種隔離）のもとで生きる人々の姿を描き、差別と闘った。" },
      peace: { laureates: [{ name: "アウン・サン・スー・チー", en: "Aung San Suu Kyi", country: "ミャンマー" }], reason: "民主主義と人権のための非暴力の闘い", plain: "ミャンマーの民主化運動の指導者。軍事政権下で長く自宅軟禁されながら非暴力で闘った（後年、政治指導者としての評価は分かれている）。" },
      economics: { laureates: [{ name: "ロナルド・コース", en: "Ronald Coase", country: "英国" }], reason: "取引費用と財産権が経済の制度構造と機能に持つ意義の発見と解明", plain: "取引にかかる手間やコスト、権利の決め方が、企業のあり方や経済の仕組みを左右することを示した。なぜ会社という組織が存在するのかを説明した。" }
    },
    note: "平和賞のアウン・サン・スー・チーはミャンマーの軍政下で自宅軟禁中の受賞だった（後に政治家として毀誉褒貶を受ける）。"
  },
  {
    year: 1990,
    categories: {
      physics: { laureates: [{ name: "ジェローム・フリードマン", en: "Jerome Friedman", country: "米国" }, { name: "ヘンリー・ケンダル", en: "Henry Kendall", country: "米国" }, { name: "リチャード・テイラー", en: "Richard Taylor", country: "カナダ" }], reason: "陽子と束縛中性子における電子の深非弾性散乱の先駆的研究（クォーク模型の発展に重要）", plain: "陽子に電子を高速でぶつける実験から、陽子がさらに小さな粒『クォーク』からできていることを示した。物質の最小構成要素の理解を決定づけた。" },
      chemistry: { laureates: [{ name: "イライアス・コーリー", en: "Elias James Corey", country: "米国" }], reason: "有機合成の理論と方法論の開発（逆合成解析）", plain: "複雑な分子を作るとき、完成形から逆算して作り方を設計する考え方（逆合成解析）を確立した。新薬の合成を効率化する標準的な手法になった。" },
      medicine: { laureates: [{ name: "ジョセフ・マレー", en: "Joseph Murray", country: "米国" }, { name: "エドワード・トーマス", en: "E. Donnall Thomas", country: "米国" }], reason: "ヒトの疾患治療における臓器・細胞移植に関する発見", plain: "臓器移植（腎臓）と骨髄移植を成功させ、拒絶反応を乗り越える道を開いた。今日の移植医療の基礎を築いた。" },
      literature: { laureates: [{ name: "オクタビオ・パス", en: "Octavio Paz", country: "メキシコ" }], reason: "感覚的な知性と人間主義的な誠実さに特徴づけられた、広い視野を持つ情熱的な作品", plain: "メキシコの詩人・批評家。幅広い教養と情熱で、人間とメキシコの文化を深く見つめる作品を残した。" },
      peace: { laureates: [{ name: "ミハイル・ゴルバチョフ", en: "Mikhail Gorbachev", country: "ソビエト連邦" }], reason: "東西関係の根本的変化において果たした指導的役割", plain: "ソ連の指導者。改革（ペレストロイカ）を進め、冷戦を終わらせる大きな役割を果たした。" },
      economics: { laureates: [{ name: "ハリー・マーコウィッツ", en: "Harry Markowitz", country: "米国" }, { name: "マートン・ミラー", en: "Merton Miller", country: "米国" }, { name: "ウィリアム・シャープ", en: "William Sharpe", country: "米国" }], reason: "金融経済学の理論への先駆的業績（ポートフォリオ理論など）", plain: "投資のリスクを抑えるために資産を分散させる考え方（ポートフォリオ理論）など、現代の資産運用の基礎を築いた。" }
    },
    note: "平和賞のゴルバチョフは、冷戦終結とペレストロイカ（改革）を主導した功績で受賞。"
  },
  {
    year: 1989,
    categories: {
      physics: { laureates: [{ name: "ノーマン・ラムゼー", en: "Norman Ramsey", country: "米国" }, { name: "ハンス・デーメルト", en: "Hans Dehmelt", country: "米国" }, { name: "ウォルフガング・パウル", en: "Wolfgang Paul", country: "ドイツ" }], reason: "分離振動場法の発明と水素メーザー・原子時計への応用、およびイオントラップ技術の開発", plain: "原子や原子核を精密に測る技術や、イオンを1個だけ閉じ込める『わな』を開発した。世界で最も正確な原子時計の基礎になり、GPSなどを支えている。" },
      chemistry: { laureates: [{ name: "シドニー・アルトマン", en: "Sidney Altman", country: "カナダ・米国" }, { name: "トーマス・チェック", en: "Thomas Cech", country: "米国" }], reason: "RNAの触媒作用（リボザイム）の発見", plain: "RNAは情報を運ぶだけと思われていたが、酵素のように化学反応を進める働きもあることを発見した。『生命はRNAから始まった』という仮説を後押しした。" },
      medicine: { laureates: [{ name: "マイケル・ビショップ", en: "J. Michael Bishop", country: "米国" }, { name: "ハロルド・ヴァーマス", en: "Harold Varmus", country: "米国" }], reason: "レトロウイルスのがん遺伝子が細胞に由来することの発見", plain: "がんを引き起こす遺伝子が、もとは正常な細胞自身の遺伝子だったことを発見した。がんがどう生まれるかの理解を根本から変えた。" },
      literature: { laureates: [{ name: "カミロ・ホセ・セラ", en: "Camilo José Cela", country: "スペイン" }], reason: "抑制された共感をもって人間の脆さへの挑戦的な視座を形づくる、豊かで力強い散文", plain: "スペインの作家。内戦後の暗い社会を、実験的で力強い文章で描いた。" },
      peace: { laureates: [{ name: "ダライ・ラマ14世（テンジン・ギャツォ）", en: "14th Dalai Lama", country: "チベット" }], reason: "寛容と相互尊重に基づく平和的解決の提唱", plain: "チベット仏教の最高指導者。中国の支配下にあるチベットの問題を、暴力に訴えず対話で解決しようと訴え続けた。" },
      economics: { laureates: [{ name: "トリグヴェ・ホーヴェルモ", en: "Trygve Haavelmo", country: "ノルウェー" }], reason: "計量経済学の確率論的基礎の解明と、同時方程式的な経済構造の分析", plain: "経済のデータを統計・確率を使って分析する『計量経済学』の理論的な土台を築いた。" }
    },
    note: "化学のRNA触媒（リボザイム）の発見は、「RNAワールド仮説」など生命の起源の議論に大きな影響を与えた。平和賞はチベット仏教の指導者ダライ・ラマ14世へ。"
  },
  {
    year: 1988,
    categories: {
      physics: { laureates: [{ name: "レオン・レーダーマン", en: "Leon Lederman", country: "米国" }, { name: "メルヴィン・シュワーツ", en: "Melvin Schwartz", country: "米国" }, { name: "ジャック・スタインバーガー", en: "Jack Steinberger", country: "米国" }], reason: "ニュートリノビーム法と、ミューニュートリノの発見によるレプトンの二重項構造の実証", plain: "ニュートリノという素粒子に複数の種類があることを実験で示した。素粒子を分類する『標準模型』の確立に貢献した。" },
      chemistry: { laureates: [{ name: "ヨハン・ダイゼンホーファー", en: "Johann Deisenhofer", country: "ドイツ" }, { name: "ロベルト・フーバー", en: "Robert Huber", country: "ドイツ" }, { name: "ハルトムート・ミヒェル", en: "Hartmut Michel", country: "ドイツ" }], reason: "光合成反応中心の三次元構造の決定", plain: "植物などが光からエネルギーを作り出す『光合成』の中心にあるタンパク質の立体構造を、初めて詳しく解明した。生命を支える仕組みの理解を進めた。" },
      medicine: { laureates: [{ name: "ジェームズ・ブラック", en: "James Black", country: "英国" }, { name: "ガートルード・エリオン", en: "Gertrude Elion", country: "米国" }, { name: "ジョージ・ヒッチングス", en: "George Hitchings", country: "米国" }], reason: "薬物治療の重要な原理の発見", plain: "病気の仕組みを理解したうえで、狙いを定めて薬を設計する考え方を確立した。胃潰瘍の薬や心臓の薬、白血病の治療薬など多くの薬を生み出した。" },
      literature: { laureates: [{ name: "ナギーブ・マフフーズ", en: "Naguib Mahfouz", country: "エジプト" }], reason: "全人類に通じるアラビア語の物語芸術を形づくった、ニュアンス豊かな作品", plain: "エジプトの作家。カイロの庶民の暮らしを描き、アラビア語の文学を世界に広げた。アラビア語作家で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "国連平和維持軍（PKO）", en: "UN Peacekeeping Forces", country: "国連" }], reason: "武力衝突を防ぎ、交渉のための条件を作り出した活動", plain: "紛争地に派遣され、停戦の監視や衝突の防止にあたる国連の平和維持部隊（PKO）の活動が評価された。" },
      economics: { laureates: [{ name: "モーリス・アレ", en: "Maurice Allais", country: "フランス" }], reason: "市場理論と資源の効率的利用の理論への先駆的貢献", plain: "市場がどう働き、限られた資源をどう効率よく使えるかを理論的に分析した、フランスを代表する経済学者。" }
    },
    note: "文学のナギーブ・マフフーズはアラビア語作家で初のノーベル文学賞。医学のエリオンらは合理的な薬剤設計の原理を確立し、多くの治療薬を生んだ。"
  },
  {
    year: 1987,
    categories: {
      physics: { laureates: [{ name: "ゲオルク・ベドノルツ", en: "J. Georg Bednorz", country: "ドイツ" }, { name: "アレックス・ミュラー", en: "K. Alexander Müller", country: "スイス" }], reason: "セラミック材料における超伝導の発見という重要な突破口", plain: "それまで超低温でしか起きないとされた『超伝導』（電気抵抗ゼロ）を、比較的高い温度のセラミックスで起こせることを発見した。超伝導研究のブームを巻き起こした。" },
      chemistry: { laureates: [{ name: "ドナルド・クラム", en: "Donald Cram", country: "米国" }, { name: "ジャン＝マリ・レーン", en: "Jean-Marie Lehn", country: "フランス" }, { name: "チャールズ・ペダーセン", en: "Charles Pedersen", country: "米国" }], reason: "高い選択性で構造特異的に相互作用する分子の開発と利用", plain: "特定の分子だけを選んでくっつく『鍵と鍵穴』のような分子を作った。生き物が持つ精密な分子認識をまねる研究（超分子化学）の基礎になった。" },
      medicine: { laureates: [{ name: "利根川進", en: "Susumu Tonegawa", country: "日本" }], reason: "抗体の多様性が生み出される遺伝的原理の発見", plain: "体が無数の種類の病原体に対応する抗体を、限られた遺伝子からどうやって作り分けているのかを解明した。日本人で初（現在も唯一）の医学・生理学賞の単独受賞。" },
      literature: { laureates: [{ name: "ヨシフ・ブロツキー", en: "Joseph Brodsky", country: "ロシア・米国" }], reason: "明晰な思考と詩的な強度に満ちた包括的な作品", plain: "ソ連から追放され米国に渡った詩人。亡命の経験をもとに、明晰で力強い詩を書いた。" },
      peace: { laureates: [{ name: "オスカル・アリアス・サンチェス", en: "Oscar Arias Sánchez", country: "コスタリカ" }], reason: "中米における恒久的平和への働き", plain: "コスタリカの大統領。内戦が続いていた中米諸国の和平合意をまとめた功績で受賞した。" },
      economics: { laureates: [{ name: "ロバート・ソロー", en: "Robert Solow", country: "米国" }], reason: "経済成長理論への貢献", plain: "国の経済が長期的に成長する原動力が、設備投資だけでなく『技術の進歩』にあることを示した。経済成長論の土台を築いた。" }
    },
    note: "医学で利根川進氏が日本人初（かつ現在も唯一）の生理学・医学賞を単独受賞。免疫の抗体が多様に作られる仕組みを解明した。"
  },
  {
    year: 1986,
    categories: {
      physics: { laureates: [{ name: "エルンスト・ルスカ", en: "Ernst Ruska", country: "ドイツ" }, { name: "ゲルト・ビーニッヒ", en: "Gerd Binnig", country: "ドイツ" }, { name: "ハインリッヒ・ローラー", en: "Heinrich Rohrer", country: "スイス" }], reason: "電子光学の基礎的業績と最初の電子顕微鏡の設計、および走査型トンネル顕微鏡の設計", plain: "最初の電子顕微鏡を作り（ルスカ）、原子を1個ずつ見て操作できる顕微鏡（STM）を発明した（ビーニッヒ、ローラー）。ナノテクノロジーの基盤になった。" },
      chemistry: { laureates: [{ name: "ダドリー・ハーシュバック", en: "Dudley Herschbach", country: "米国" }, { name: "李遠哲（ユアン・リー）", en: "Yuan T. Lee", country: "台湾・米国" }, { name: "ジョン・ポラニー", en: "John Polanyi", country: "カナダ" }], reason: "化学素過程の動力学に関する貢献", plain: "分子同士がぶつかって化学反応が起きる瞬間に何が起きているかを、詳しく調べる手法を開発した。化学反応を分子レベルで理解する道を開いた。" },
      medicine: { laureates: [{ name: "スタンリー・コーエン", en: "Stanley Cohen", country: "米国" }, { name: "リータ・レーヴィ＝モンタルチーニ", en: "Rita Levi-Montalcini", country: "イタリア・米国" }], reason: "成長因子の発見", plain: "細胞の成長や分化を促す『成長因子』という物質を発見した。発生や、がん・神経の病気の理解につながった。" },
      literature: { laureates: [{ name: "ウォーレ・ショインカ", en: "Wole Soyinka", country: "ナイジェリア" }], reason: "広い文化的視野と詩的な響きで、存在のドラマを形づくる", plain: "ナイジェリアの劇作家・詩人。アフリカの伝統と西洋の文学を融合させた作品で知られる。アフリカ出身で初のノーベル文学賞。" },
      peace: { laureates: [{ name: "エリ・ヴィーゼル", en: "Elie Wiesel", country: "米国" }], reason: "平和・贖罪・尊厳のメッセージを人類に伝える使者として", plain: "ホロコースト（ナチスのユダヤ人虐殺）の生還者で作家。『夜』などで悲劇の記憶を語り継ぎ、二度と繰り返さないよう訴え続けた。" },
      economics: { laureates: [{ name: "ジェームズ・ブキャナン", en: "James M. Buchanan", country: "米国" }], reason: "経済的・政治的意思決定の理論における契約的・憲法的基礎の発展（公共選択論）", plain: "政治家や役人も自分の利益で動く、という前提で政府の意思決定を分析する『公共選択論』を打ち立てた。" }
    },
    note: "物理学の走査型トンネル顕微鏡は原子を一つずつ見られる装置でナノテクの基盤に。文学のショインカはアフリカ出身で初のノーベル文学賞。"
  },
  {
    year: 1985,
    categories: {
      physics: { laureates: [{ name: "クラウス・フォン・クリッツィング", en: "Klaus von Klitzing", country: "ドイツ" }], reason: "量子ホール効果の発見", plain: "強い磁場の中で電子の電気の流れ方が、とびとびの正確な値をとる現象（量子ホール効果）を発見した。電気抵抗の世界標準として使われるほど精密。" },
      chemistry: { laureates: [{ name: "ハーバート・ハウプトマン", en: "Herbert Hauptman", country: "米国" }, { name: "ジェローム・カール", en: "Jerome Karle", country: "米国" }], reason: "結晶構造決定のための直接法の開発における顕著な業績", plain: "X線を当てて得たデータから、分子の立体構造を計算で直接求める方法を開発した。新薬や新素材の分子構造を調べるのに広く使われる。" },
      medicine: { laureates: [{ name: "マイケル・ブラウン", en: "Michael Brown", country: "米国" }, { name: "ジョセフ・ゴールドスタイン", en: "Joseph Goldstein", country: "米国" }], reason: "コレステロール代謝の調節に関する発見", plain: "血液中のコレステロールが細胞に取り込まれ、量が調節される仕組みを解明した。コレステロールを下げる薬（スタチン）の開発につながった。" },
      literature: { laureates: [{ name: "クロード・シモン", en: "Claude Simon", country: "フランス" }], reason: "詩人と画家の創造性を、人間の条件を描く深い時間意識と結びつけた小説", plain: "フランスの作家。時間や記憶を自由に行き来する、絵画的で実験的な小説で知られる。" },
      peace: { laureates: [{ name: "核戦争防止国際医師会議（IPPNW）", en: "IPPNW", country: "国際団体" }], reason: "核戦争の破滅的な帰結についての権威ある情報を広め、認識を高めた活動", plain: "医師たちが国境を越えて集まり、核戦争が人体や社会にもたらす悲惨な結果を医学的に示して核軍縮を訴えた団体。" },
      economics: { laureates: [{ name: "フランコ・モディリアーニ", en: "Franco Modigliani", country: "イタリア・米国" }], reason: "貯蓄と金融市場に関する先駆的分析", plain: "人が人生の各時期にどう貯蓄し消費するか（若いうちに蓄え、老後に使う）を理論化した。年金や金融市場の分析の基礎になった。" }
    },
    note: "医学のブラウン・ゴールドスタインは、血中コレステロールが細胞に取り込まれる仕組みを解明し、スタチン系薬剤の開発につながった。"
  },
  {
    year: 1984,
    categories: {
      physics: { laureates: [{ name: "カルロ・ルビア", en: "Carlo Rubbia", country: "イタリア" }, { name: "シモン・ファンデルメール", en: "Simon van der Meer", country: "オランダ" }], reason: "弱い相互作用を媒介する場の粒子WとZの発見につながった大型プロジェクトへの決定的貢献", plain: "放射性崩壊などを起こす『弱い力』を伝える素粒子（W粒子・Z粒子）を実験で発見した。自然界の基本的な力を統一的に理解する理論を裏づけた。" },
      chemistry: { laureates: [{ name: "ロバート・メリフィールド", en: "Robert Bruce Merrifield", country: "米国" }], reason: "固相上での化学合成法の開発（固相ペプチド合成）", plain: "タンパク質の材料（アミノ酸）を1個ずつ順番につないで、効率よくペプチドを合成する方法を開発した。医薬品や研究用の分子づくりを大きく効率化した。" },
      medicine: { laureates: [{ name: "ニールス・イェルネ", en: "Niels Jerne", country: "デンマーク" }, { name: "ジョルジュ・ケーラー", en: "Georges Köhler", country: "ドイツ" }, { name: "セーサル・ミルスタイン", en: "César Milstein", country: "アルゼンチン・英国" }], reason: "免疫系の特異性に関する理論と、モノクローナル抗体の作製原理の発見", plain: "特定の標的だけにくっつく均一な抗体（モノクローナル抗体）を大量に作る方法を生み出した。今の抗体医薬や検査キットの基盤になっている。" },
      literature: { laureates: [{ name: "ヤロスラフ・サイフェルト", en: "Jaroslav Seifert", country: "チェコスロバキア" }], reason: "新鮮さと官能、豊かな創意に満ち、人間の不屈の精神を解き放つ詩", plain: "チェコの詩人。抑圧の時代にあっても、みずみずしく人間の自由な精神を歌い続けた。" },
      peace: { laureates: [{ name: "デズモンド・ツツ", en: "Desmond Tutu", country: "南アフリカ" }], reason: "南アフリカのアパルトヘイト問題を解決する非暴力運動の統合的指導者として", plain: "南アフリカの聖職者。人種隔離（アパルトヘイト）に非暴力で立ち向かい、運動をまとめる精神的な支柱となった。" },
      economics: { laureates: [{ name: "リチャード・ストーン", en: "Richard Stone", country: "英国" }], reason: "国民経済計算体系の発展への基礎的貢献", plain: "GDP（国内総生産）など、国全体の経済を数字でとらえる『国民経済計算』の仕組みを作った。今も各国の経済統計の土台になっている。" }
    },
    note: "医学のモノクローナル抗体の作製原理は、今日の抗体医薬・診断薬の基盤。平和賞はアパルトヘイトと闘った聖職者デズモンド・ツツへ。"
  },
  {
    year: 1983,
    categories: {
      physics: { laureates: [{ name: "スブラマニアン・チャンドラセカール", en: "Subrahmanyan Chandrasekhar", country: "インド・米国" }, { name: "ウィリアム・ファウラー", en: "William Fowler", country: "米国" }], reason: "星の構造と進化に重要な物理過程の理論的研究、および宇宙での元素生成の核反応の研究", plain: "星がどう生まれ、燃え、死ぬのかを理論で解明した（チャンドラセカール）。また、星の中で水素などから重い元素が作られる仕組みを示した（ファウラー）。" },
      chemistry: { laureates: [{ name: "ヘンリー・タウベ", en: "Henry Taube", country: "カナダ・米国" }], reason: "金属錯体における電子移動反応の機構に関する研究", plain: "金属を含む分子の間で電子がどう受け渡されるか、その仕組みを詳しく解明した。電池や触媒など、幅広い化学反応の理解に役立つ。" },
      medicine: { laureates: [{ name: "バーバラ・マクリントック", en: "Barbara McClintock", country: "米国" }], reason: "可動遺伝因子（トランスポゾン）の発見", plain: "遺伝子がゲノムの中を『動く』ことがあると発見した。発表当時は理解されなかったが、数十年後にその正しさが認められた。女性の単独受賞。" },
      literature: { laureates: [{ name: "ウィリアム・ゴールディング", en: "William Golding", country: "英国" }], reason: "現実的な語りの明晰さと神話の普遍性で現代の人間の条件を照らす小説（『蠅の王』）", plain: "イギリスの作家。無人島に流れ着いた少年たちが野蛮化する『蠅の王』で、人間の本性の暗い面を描いた。" },
      peace: { laureates: [{ name: "レフ・ヴァウェンサ", en: "Lech Wałęsa", country: "ポーランド" }], reason: "ポーランドにおける自由な労働組合と人権のための非暴力の闘い", plain: "ポーランドの労働組合『連帯』を率いた指導者。共産主義政権下で労働者の権利と自由を求め、のちの民主化につながった。後に大統領に。" },
      economics: { laureates: [{ name: "ジェラール・ドブリュー", en: "Gerard Debreu", country: "フランス・米国" }], reason: "経済理論への新しい分析手法の導入と、一般均衡理論の厳密な再構築", plain: "市場で需要と供給がつり合う仕組み（一般均衡）を、厳密な数学で証明し直した。経済学を理論的に精密にした。" }
    },
    note: "医学のマクリントックは、遺伝子がゲノム上を動く「トランスポゾン」を発見。発表当時は理解されなかったが数十年後に評価された。平和賞は「連帯」を率いたワレサへ。"
  },
  {
    year: 1982,
    categories: {
      physics: { laureates: [{ name: "ケネス・ウィルソン", en: "Kenneth Wilson", country: "米国" }], reason: "相転移に伴う臨界現象の理論（くりこみ群）", plain: "水が沸騰して蒸気になるような『状態の切り替わり（相転移）』が起きる境目で何が起きるかを説明する理論を作った。物理の幅広い問題に応用される強力な手法。" },
      chemistry: { laureates: [{ name: "アーロン・クルーグ", en: "Aaron Klug", country: "英国" }], reason: "結晶学的電子顕微鏡法の開発と、生物学的に重要な核酸タンパク質複合体の構造解明", plain: "電子顕微鏡とコンピュータ処理を組み合わせ、ウイルスや遺伝子とタンパク質の複合体の立体構造を明らかにする手法を開発した。" },
      medicine: { laureates: [{ name: "スネ・ベリストローム", en: "Sune Bergström", country: "スウェーデン" }, { name: "ベンクト・サムエルソン", en: "Bengt Samuelsson", country: "スウェーデン" }, { name: "ジョン・ベイン", en: "John Vane", country: "英国" }], reason: "プロスタグランジンおよび関連する生理活性物質に関する発見", plain: "体内で炎症・痛み・発熱などに関わる物質（プロスタグランジン）の働きを解明した。アスピリンがなぜ効くかの理解にもつながった。" },
      literature: { laureates: [{ name: "ガブリエル・ガルシア＝マルケス", en: "Gabriel García Márquez", country: "コロンビア" }], reason: "幻想と現実を融合させ、ある大陸の生と対立を映す豊かな想像世界を描いた小説と短編", plain: "コロンビアの作家。『百年の孤独』で知られ、現実と幻想が溶け合う『マジックリアリズム』を代表する存在。" },
      peace: { laureates: [{ name: "アルバ・ミュルダール", en: "Alva Myrdal", country: "スウェーデン" }, { name: "アルフォンソ・ガルシア・ロブレス", en: "Alfonso García Robles", country: "メキシコ" }], reason: "軍縮と、非核・非武装地帯のための働き", plain: "核軍縮を訴え、核兵器のない地帯をつくる取り組みに尽くした2人の外交官。" },
      economics: { laureates: [{ name: "ジョージ・スティグラー", en: "George Stigler", country: "米国" }], reason: "産業構造、市場の機能、公的規制の原因と効果に関する独創的研究", plain: "企業や業界がどう動くか、政府の規制が実際にどんな効果をもたらすかを分析した。規制のあり方を考える研究を切り開いた。" }
    },
    note: "文学のガルシア＝マルケスは『百年の孤独』で知られ、ラテンアメリカの「マジックリアリズム」を代表する作家。"
  },
  {
    year: 1981,
    categories: {
      physics: { laureates: [{ name: "ニコラス・ブルームバーゲン", en: "Nicolaas Bloembergen", country: "オランダ・米国" }, { name: "アーサー・ショーロー", en: "Arthur Schawlow", country: "米国" }, { name: "カイ・シーグバーン", en: "Kai Siegbahn", country: "スウェーデン" }], reason: "レーザー分光法の開発への貢献、および高分解能電子分光法の開発への貢献", plain: "レーザーを使って物質の成分や構造を精密に調べる分光法を発展させた。物質に含まれる原子や分子を詳しく分析する基本技術になった。" },
      chemistry: { laureates: [{ name: "福井謙一", en: "Kenichi Fukui", country: "日本" }, { name: "ロアルド・ホフマン", en: "Roald Hoffmann", country: "米国" }], reason: "化学反応の過程に関する理論の独立した発展（フロンティア軌道理論・ウッドワード＝ホフマン則）", plain: "化学反応がどう進むかを、電子のふるまい（軌道）から予測する理論を作った。福井謙一氏が日本人で初の化学賞を受賞。" },
      medicine: { laureates: [{ name: "ロジャー・スペリー", en: "Roger Sperry", country: "米国" }, { name: "デイヴィッド・ヒューベル", en: "David Hubel", country: "米国" }, { name: "トルステン・ウィーセル", en: "Torsten Wiesel", country: "スウェーデン" }], reason: "大脳半球の機能分化に関する発見、および視覚系の情報処理に関する発見", plain: "脳の左右で役割が違うこと（スペリー）や、目で見た情報を脳がどう処理するか（ヒューベルら）を解明した。脳の働きの理解を大きく進めた。" },
      literature: { laureates: [{ name: "エリアス・カネッティ", en: "Elias Canetti", country: "ブルガリア・英国" }], reason: "広い視野、豊かな思想、芸術的な力に特徴づけられた作品", plain: "ブルガリア生まれの作家。群衆や権力の心理を鋭く分析した著作などで知られる。" },
      peace: { laureates: [{ name: "国連難民高等弁務官事務所（UNHCR）", en: "UNHCR", country: "国連" }], reason: "世界中の難民への支援と保護の活動", plain: "戦争や迫害で故郷を追われた難民を保護・支援する国連の機関。世界各地での人道活動が評価された。" },
      economics: { laureates: [{ name: "ジェームズ・トービン", en: "James Tobin", country: "米国" }], reason: "金融市場と、それが支出・雇用・生産・物価の決定に及ぼす関係の分析", plain: "株や債券などの金融市場の動きが、人々の消費や雇用、物価にどう影響するかを分析した。『トービン税』の提案でも知られる。" }
    },
    note: "化学で福井謙一氏が日本人初の化学賞を受賞。「フロンティア軌道理論」で化学反応の進み方を説明した。"
  },
  {
    year: 1980,
    categories: {
      physics: { laureates: [{ name: "ジェームズ・クローニン", en: "James Cronin", country: "米国" }, { name: "ヴァル・フィッチ", en: "Val Fitch", country: "米国" }], reason: "中性K中間子の崩壊における基本的対称性の破れ（CP対称性の破れ）の発見", plain: "素粒子の世界では成り立つと思われていた『対称性』が、実はわずかに破れていることを発見した。宇宙に物質が残った理由を考える手がかりになった。" },
      chemistry: { laureates: [{ name: "ポール・バーグ", en: "Paul Berg", country: "米国" }, { name: "ウォルター・ギルバート", en: "Walter Gilbert", country: "米国" }, { name: "フレデリック・サンガー", en: "Frederick Sanger", country: "英国" }], reason: "核酸の生化学の基礎研究（特に組換えDNA）、および核酸の塩基配列決定への貢献", plain: "異なる生物のDNAをつなぐ遺伝子組換えの基礎（バーグ）や、DNAの文字配列を読み取る方法（サンガー、ギルバート）を開発した。サンガーは化学賞を2度受賞した唯一の人物。" },
      medicine: { laureates: [{ name: "バルフ・ベナセラフ", en: "Baruj Benacerraf", country: "米国" }, { name: "ジャン・ドーセ", en: "Jean Dausset", country: "フランス" }, { name: "ジョージ・スネル", en: "George Snell", country: "米国" }], reason: "免疫反応を制御する細胞表面の遺伝的に決定された構造に関する発見", plain: "細胞の表面にあり、自分と他人を見分ける『目印』（組織適合性）の仕組みを解明した。臓器移植の拒絶反応の理解につながった。" },
      literature: { laureates: [{ name: "チェスワフ・ミウォシュ", en: "Czesław Miłosz", country: "ポーランド・米国" }], reason: "厳しい対立の世界における人間の露わな条件を、妥協なき明晰さで表現した", plain: "ポーランド出身の詩人。戦争や亡命を経験し、激動の時代を生きる人間の姿を明晰な言葉で表現した。" },
      peace: { laureates: [{ name: "アドルフォ・ペレス・エスキベル", en: "Adolfo Pérez Esquivel", country: "アルゼンチン" }], reason: "特にラテンアメリカの抑圧された人々にとっての希望の源として", plain: "アルゼンチンの人権活動家。軍事政権下で弾圧された人々のために、非暴力で人権を訴え続けた。" },
      economics: { laureates: [{ name: "ローレンス・クライン", en: "Lawrence Klein", country: "米国" }], reason: "計量経済モデルの構築と、景気変動・経済政策の分析への応用", plain: "経済の動きを数式のモデルで表し、景気の予測や政策の効果の分析に使う手法を築いた。経済予測の先駆けとなった。" }
    },
    note: "化学のサンガーはDNA塩基配列決定法（サンガー法）を確立。1958年に続く2度目の化学賞で、化学賞を2回受賞した唯一の人物。"
  }
];
