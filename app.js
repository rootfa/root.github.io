/**
 * ============================================================
 * 🌌 STEALTH 3D BIOLINK ENGINE - F.__._ / ROOTFA
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // SVG Icon Library
  const ICONS = {
    discord: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    nitro: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M4.6 3.6A3 3 0 0 1 7.2 2h9.6a3 3 0 0 1 2.6 1.6l4 7a3 3 0 0 1 0 2.8l-4 7a3 3 0 0 1-2.6 1.6H7.2a3 3 0 0 1-2.6-1.6l-4-7a3 3 0 0 1 0-2.8l4-7z"/></svg>`,
    booster: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    hypesquad: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l6 6-6 6-6-6 6-6z"/></svg>`,
    developer: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    early: `<svg viewBox="0 0 24 24" fill="#ffffff"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>`
  };

  // 1. Initialize Profile Data
  function initProfile() {
    const { profile, settings, socials } = CONFIG;

    if (settings.enterScreenText) document.getElementById('enterTitle').textContent = settings.enterScreenText;
    if (settings.enterScreenSubtext) document.getElementById('enterSub').textContent = settings.enterScreenSubtext;

    const nameEl = document.getElementById('displayName');
    if (nameEl) nameEl.textContent = profile.name;
    const handleEl = document.getElementById('discordHandle');
    if (handleEl) handleEl.textContent = profile.discordTag;
    const statusEl = document.getElementById('customStatusText');
    if (statusEl) statusEl.textContent = profile.statusText;
    const bioEl = document.getElementById('bioText');
    if (bioEl) bioEl.textContent = profile.bio || '';
    const viewEl = document.getElementById('viewCount');
    if (viewEl) viewEl.textContent = (profile.viewsCount || 2049).toLocaleString();
    const clanEl = document.getElementById('clanBadge');
    if (clanEl && profile.clan) {
      clanEl.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg><span>${profile.clan}</span>`;
    }

    const statusIndicator = document.getElementById('statusIndicator');
    statusIndicator.className = `status-indicator ${profile.status || 'dnd'}`;

    if (profile.avatar) {
      const avatarEl = document.getElementById('avatarImg');
      if (profile.avatar.startsWith('data:')) {
        avatarEl.src = profile.avatar;
      } else {
        const bust = (profile.avatar.includes('?') ? '&' : '?') + 't=' + Date.now();
        avatarEl.onerror = () => {
          if (!avatarEl.dataset.retried) {
            avatarEl.dataset.retried = '1';
            avatarEl.src = 'assets/images/avatar.png';
          }
        };
        avatarEl.src = profile.avatar.startsWith('http') ? profile.avatar : (profile.avatar + bust);
      }
    }

    // Discord Badges
    const badgesRow = document.getElementById('badgesRow');
    badgesRow.innerHTML = '';
    if (profile.badges && profile.badges.length) {
      profile.badges.forEach(b => {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'badge-item';
        badgeEl.title = b.name;
        badgeEl.innerHTML = ICONS[b.icon] || ICONS.nitro;
        badgesRow.appendChild(badgeEl);
      });
    }

    // Horizontal Socials Grid (جنب بعض)
    const socialsContainer = document.getElementById('socialsContainer');
    socialsContainer.innerHTML = '';
    socials.forEach(s => {
      const item = document.createElement('a');
      item.className = `social-pill ${s.id}`;
      item.href = s.url || '#';
      // All social buttons open the accounts directly
      item.target = '_blank';
      item.rel = 'noopener noreferrer';

      item.innerHTML = `
        <div class="social-pill-icon">
          ${ICONS[s.icon] || ICONS.discord}
        </div>
        <span class="social-pill-name">${s.name}</span>
        <span class="social-pill-user">${s.username}</span>
      `;

      // Explicit click handler to open account reliably in new tab
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (s.url && s.url !== '#') {
          window.open(s.url, '_blank');
        }
        if (s.id === 'discord') {
          copyDiscordHandle(s.username || profile.discordUsername);
        }
      });

      socialsContainer.appendChild(item);
    });

    // Copy Discord Username
    document.getElementById('copyDiscordBtn').addEventListener('click', () => {
      copyDiscordHandle(profile.discordTag || profile.discordUsername);
    });
  }

  // 2. Toast Notification
  function showToast(text) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  function copyDiscordHandle(text) {
    const clean = text.startsWith('@') ? text.slice(1) : text;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(clean).then(() => {
        showToast(`تم نسخ الديسكورد: ${clean}`);
      }).catch(() => {
        fallbackCopy(clean);
      });
    } else {
      fallbackCopy(clean);
    }
  }

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(`تم نسخ الديسكورد: ${text}`);
  }

  // 3. Smooth 3D Mouse Tilt Engine
  function init3DTilt() {
    const card = document.getElementById('tiltCard');
    const cardWrapper = document.getElementById('cardWrapper');
    const glare = document.getElementById('cardGlare');
    const maxAngle = CONFIG.settings.tiltMaxAngle || 18;

    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let glareX = 50;
    let glareY = 50;
    let glareOpacity = 0;

    function updateTilt() {
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;

      card.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;

      if (CONFIG.settings.enableGlare) {
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, transparent 65%)`;
        glare.style.opacity = glareOpacity;
      }

      requestAnimationFrame(updateTilt);
    }
    requestAnimationFrame(updateTilt);

    window.addEventListener('mousemove', (e) => {
      const rect = cardWrapper.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const normX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const normY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      const clampedX = Math.max(-1, Math.min(1, normX));
      const clampedY = Math.max(-1, Math.min(1, normY));

      targetRotateY = clampedX * maxAngle;
      targetRotateX = -clampedY * maxAngle;

      glareX = ((e.clientX - rect.left) / rect.width) * 100;
      glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glareOpacity = 0.35;
    });

    document.addEventListener('mouseleave', () => {
      targetRotateX = 0;
      targetRotateY = 0;
      glareOpacity = 0;
    });

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          const gamma = Math.max(-30, Math.min(30, e.gamma));
          const beta = Math.max(-30, Math.min(30, e.beta - 45));
          targetRotateY = (gamma / 30) * maxAngle;
          targetRotateX = -(beta / 30) * maxAngle;
        }
      });
    }
  }

  // 4. YouTube Audio Music Player Engine
  let ytPlayer = null;
  let ytReady = false;
  let currentTrackIdx = 0;
  let isPlaying = false;
  let progressTimer = null;
  const playlist = CONFIG.music.playlist;

  const musicCard = document.getElementById('musicPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const prevBtn = document.getElementById('prevTrackBtn');
  const nextBtn = document.getElementById('nextTrackBtn');
  const progressContainer = document.getElementById('progressContainer');
  const progressFill = document.getElementById('progressFill');
  const currentTimeEl = document.getElementById('currentTime');
  const totalDurationEl = document.getElementById('totalDuration');
  const songTitle = document.getElementById('songTitle');
  const songArtist = document.getElementById('songArtist');
  const songCover = document.getElementById('songCover');
  const volSlider = document.getElementById('volSlider');
  const volBtn = document.getElementById('volBtn');
  const volIcon = document.getElementById('volIcon');

  function formatTime(secs) {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateTrackDisplay(idx) {
    const track = playlist[idx];
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    songCover.src = track.cover || `https://img.youtube.com/vi/${track.id}/hqdefault.jpg`;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
  }

  function startProgressTracking() {
    clearInterval(progressTimer);
    progressTimer = setInterval(() => {
      if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getDuration) {
        const cur = ytPlayer.getCurrentTime() || 0;
        const dur = ytPlayer.getDuration() || 0;
        if (dur > 0) {
          progressFill.style.width = `${(cur / dur) * 100}%`;
          currentTimeEl.textContent = formatTime(cur);
          totalDurationEl.textContent = formatTime(dur);
        }
      }
    }, 300);
  }

  function setPlayingState(playing) {
    isPlaying = playing;
    if (playing) {
      musicCard.classList.add('playing');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      startProgressTracking();
    } else {
      musicCard.classList.remove('playing');
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      clearInterval(progressTimer);
    }
  }

  // Global YouTube API Ready callback
  window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('ytPlayer', {
      height: '180',
      width: '320',
      videoId: playlist[0].id,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1
      },
      events: {
        onReady: (event) => {
          ytReady = true;
          event.target.setVolume(Math.round(CONFIG.music.defaultVolume * 100));
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            setPlayingState(true);
          } else if (event.data === YT.PlayerState.PAUSED) {
            setPlayingState(false);
          } else if (event.data === YT.PlayerState.ENDED) {
            nextTrack();
          }
        },
        onError: (event) => {
          console.warn('YouTube playback error, continuing 24/7 loop:', event.data);
          setTimeout(nextTrack, 1000);
        }
      }
    });
  };

  function playTrack(idx) {
    currentTrackIdx = idx;
    updateTrackDisplay(idx);
    if (ytPlayer && ytPlayer.loadVideoById) {
      ytPlayer.loadVideoById(playlist[idx].id);
      ytPlayer.playVideo();
      setPlayingState(true);
    }
  }

  function togglePlay() {
    if (!ytPlayer) return;
    if (isPlaying) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  }

  function nextTrack() {
    const nextIdx = (currentTrackIdx + 1) % playlist.length;
    playTrack(nextIdx);
  }

  function prevTrack() {
    const prevIdx = (currentTrackIdx - 1 + playlist.length) % playlist.length;
    playTrack(prevIdx);
  }

  // Attach Player UI Listeners
  playPauseBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  progressContainer.addEventListener('click', (e) => {
    if (!ytPlayer || !ytPlayer.getDuration) return;
    const rect = progressContainer.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const dur = ytPlayer.getDuration();
    if (dur > 0) {
      ytPlayer.seekTo(ratio * dur, true);
    }
  });

  volSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (ytPlayer && ytPlayer.setVolume) {
      ytPlayer.setVolume(val);
      if (val === 0) {
        ytPlayer.mute();
      } else {
        ytPlayer.unMute();
      }
    }
    updateVolumeIcon(val);
  });

  volBtn.addEventListener('click', () => {
    if (!ytPlayer) return;
    if (ytPlayer.isMuted()) {
      ytPlayer.unMute();
      const vol = ytPlayer.getVolume() || 40;
      volSlider.value = vol;
      updateVolumeIcon(vol);
    } else {
      ytPlayer.mute();
      volSlider.value = 0;
      updateVolumeIcon(0);
    }
  });

  function updateVolumeIcon(vol) {
    if (vol === 0) {
      volIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else {
      volIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
  }

  // 5. Enter Screen Handler (Trigger audio on user gesture)
  const enterScreen = document.getElementById('enterScreen');
  enterScreen.addEventListener('click', () => {
    enterScreen.classList.add('fade-out');
    if (ytPlayer && ytPlayer.playVideo) {
      ytPlayer.playVideo();
    } else {
      // Fallback polling until ready
      const checkReady = setInterval(() => {
        if (ytPlayer && ytPlayer.playVideo) {
          clearInterval(checkReady);
          ytPlayer.playVideo();
        }
      }, 200);
      setTimeout(() => clearInterval(checkReady), 4000);
    }
  });

  // 6. Subtle Particles Background
  function initParticles() {
    if (!CONFIG.settings.enableFloatingParticles) return;
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.4 + 0.1,
        color: '#ffffff'
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
      });
      requestAnimationFrame(render);
    }
    render();
  }

  // Launch everything
  initProfile();
  init3DTilt();
  initParticles();
  updateTrackDisplay(0);
});
