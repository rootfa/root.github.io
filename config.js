/**
 * ============================================================
 * 🛠️ ملف إعدادات الحسابات والموسيقى - FAHAD ZA3LAN / ROOTFA
 * ============================================================
 */

const CONFIG = {
  // 👤 معلومات حساب الديسكورد الحقيقية (Fahad Za3lan)
  profile: {
    name: "Fahad Za3lan",
    discordUsername: "f.__._",
    discordTag: "f.__._",
    discordId: "291022948163125259",
    avatar: "assets/images/avatar.png?v=clean", // صورة فم مصاص الدماء الأصلية
    clan: "Eror", // كلان ديسكورد
    status: "online", // متصل (النقطة الخضراء كما في صورتك)
    statusText: "**The End ...**", // الحالة الشخصية كما في صورتك
    bio: "",
    location: "Saudi Arabia",
    viewsCount: 2049,
    
    // شارات ديسكورد
    badges: [
      { name: "Discord Nitro", icon: "nitro" },
      { name: "Server Booster", icon: "booster" },
      { name: "HypeSquad Bravery", icon: "hypesquad" },
      { name: "Active Developer", icon: "developer" },
      { name: "Early Supporter", icon: "early" }
    ]
  },

  // 🔗 الحسابات الشخصية (كلها تفتح الحسابات مباشرة عند الضغط)
  socials: [
    {
      id: "discord",
      name: "Discord",
      username: "f.__._",
      url: "https://discord.com/users/291022948163125259",
      action: "open",
      icon: "discord"
    },
    {
      id: "tiktok",
      name: "TikTok",
      username: "@rootfa",
      url: "https://www.tiktok.com/@rootfa",
      action: "open",
      icon: "tiktok"
    },
    {
      id: "github",
      name: "GitHub",
      username: "rootfa",
      url: "https://github.com/rootfa",
      action: "open",
      icon: "github"
    }
  ],

  // 🎵 قائمة الأغاني (Loop مستمر 24 ساعة)
  music: {
    defaultVolume: 0.45,
    loop24_7: true,
    playlist: [
      {
        id: "uQthFKGkluw",
        title: "Floating in Reverie (Slowed + Reverb)",
        artist: "Moayad Aljabal",
        cover: "https://img.youtube.com/vi/uQthFKGkluw/hqdefault.jpg"
      },
      {
        id: "dYpZGN7kdZY",
        title: "It's Snowing Like It's the End of the World",
        artist: "RAMAZAN KOCAGOZ (BEST PART)",
        cover: "https://img.youtube.com/vi/dYpZGN7kdZY/hqdefault.jpg"
      },
      {
        id: "bk0YfwfwX1o",
        title: "Words (Slowed & Reverb)",
        artist: "Skylar Grey",
        cover: "https://img.youtube.com/vi/bk0YfwfwX1o/hqdefault.jpg"
      },
      {
        id: "mFmTQDQnAPk",
        title: "ecstacy (super slowed)",
        artist: "SUICIDAL-IDOL",
        cover: "https://img.youtube.com/vi/mFmTQDQnAPk/hqdefault.jpg"
      }
    ]
  },

  // 🎛️ خيارات الشاشة وتأثيرات الماوس ثلاثية الأبعاد
  settings: {
    tiltMaxAngle: 18,
    tiltPerspective: 1100,
    enableGlare: true,
    enableFloatingParticles: true,
    enterScreenText: "CLICK TO ENTER",
    enterScreenSubtext: "Fahad Za3lan • f.__._"
  }
};
