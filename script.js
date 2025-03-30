  function initPage() {
                loadTheme();
                startCountdown();
            }
            function loadTheme() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
                updateThemeToggleButton();
            }
            function toggleTheme() {
                document.body.classList.toggle('dark-mode');
                saveTheme();
                updateThemeToggleButton();
            }
            function saveTheme() {
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }
            function updateThemeToggleButton() {
                const btn = document.getElementById('theme-toggle');
                if (document.body.classList.contains('dark-mode')) {
                    btn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
                } else {
                    btn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
                }
            }
            function startCountdown() {
                setInterval(() => {
                    const expiryDate = 2606894227.090115;
                    updateTimeRemaining(expiryDate);
                }, 1000);
            }
            function updateTimeRemaining(expiryDate) {
                const now = Math.floor(Date.now() / 1000);
                const remaining = expiryDate - now;
                const elem = document.getElementById("time-remaining");
                if (!elem) return;
                if (remaining > 0) {
                    const d = Math.floor(remaining / 86400);
                    const h = Math.floor((remaining % 86400) / 3600);
                    const m = Math.floor((remaining % 3600) / 60);
                    elem.innerText = d + "d " + h + "h " + m + "m";
                } else {
                    elem.innerText = "Expired";
                }
            }
            function openTab(tabName, e) {
                const contents = document.getElementsByClassName('tab-content');
                for (let c of contents) {
                    c.classList.remove('active');
                }
                const buttons = document.getElementsByClassName('tab-button');
                for (let b of buttons) {
                    b.classList.remove('active');
                }
                document.getElementById(tabName).classList.add('active');
                e.currentTarget.classList.add('active');
            }
            function showExitModal() {
                document.getElementById('exit-modal').style.display = 'flex';
            }
            function closeModal(modalId) {
                document.getElementById(modalId).style.display = 'none';
            }
            function confirmExit() {
                setTimeout(() => {
                    fetch('/exit', { method: 'POST' });
                }, 1500);
            }
            function applyLoadedConfig() {
                const text = document.getElementById('import-text').value.trim();
                if (!text) {
                    alert("Please paste your JSON first!");
                    return;
                }
                try {
                    const cfg = JSON.parse(text);
                    applyConfigToForm(cfg);
                    // Gửi form để POST lên server
                    document.getElementById('main-config-form').submit();
                } catch(e) {
                    alert("Invalid JSON format!");
                }
            }
            window.addEventListener('load', () => {
                const params = new URLSearchParams(window.location.search);
                if (params.get('saved') === '1') {
                    document.getElementById('apply-config-modal').style.display = 'flex';
                }
            });
            function applyConfigToForm(cfg) {
                if ('fov' in cfg) document.getElementById('fov').value = cfg.fov;
                if ('smoothingX' in cfg) document.getElementById('smoothingX').value = cfg.smoothingX;
                if ('smoothingY' in cfg) document.getElementById('smoothingY').value = cfg.smoothingY;
                if ('BaseSpeed' in cfg) document.getElementById('BaseSpeed').value = cfg.BaseSpeed;
                if ('speedX' in cfg) document.getElementById('speedX').value = cfg.speedX;
                if ('speedY' in cfg) document.getElementById('speedY').value = cfg.speedY;
                if ('sensitivity' in cfg) document.getElementById('sensitivity').value = cfg.sensitivity;
                if ('offsetX' in cfg) document.getElementById('offsetX').value = cfg.offsetX;
                if ('offsetY' in cfg) document.getElementById('offsetY').value = cfg.offsetY;
                if ('tolerance' in cfg) document.getElementById('tolerance').value = cfg.tolerance;
                if ('color_to_track' in cfg) document.getElementById('color_to_track').value = cfg.color_to_track;
                if ('trigger_enabled' in cfg) {
                    document.getElementById('trigger_enabled').checked =
                        (cfg.trigger_enabled.toString().toLowerCase() === "true");
                }
                if ('FOV_TRIGGER' in cfg) document.getElementById('FOV_TRIGGER').value = cfg.FOV_TRIGGER;
                if ('trigger_delays' in cfg) document.getElementById('trigger_delays').value = cfg.trigger_delays;
                if ('base_delay' in cfg) document.getElementById('base_delay').value = cfg.base_delay;
                if ('aimbot_key_1' in cfg) document.getElementById('aimbot_key_1').value = cfg.aimbot_key_1;
                if ('trigger_hotkey' in cfg) document.getElementById('trigger_hotkey').value = cfg.trigger_hotkey;
            }
            function showCurrentConfig() {
                const current = getConfigFromForm();
                const textArea = document.getElementById('export-text');
                textArea.value = JSON.stringify(current, null, 2);
            }
            function getConfigFromForm() {
                return {
                    fov: document.getElementById('fov').value,
                    smoothingX: document.getElementById('smoothingX').value,
                    smoothingY: document.getElementById('smoothingY').value,
                    BaseSpeed: document.getElementById('BaseSpeed').value,
                    speedX: document.getElementById('speedX').value,
                    speedY: document.getElementById('speedY').value,
                    sensitivity: document.getElementById('sensitivity').value,
                    offsetX: document.getElementById('offsetX').value,
                    offsetY: document.getElementById('offsetY').value,
                    tolerance: document.getElementById('tolerance').value,
                    color_to_track: document.getElementById('color_to_track').value,
                    trigger_enabled: document.getElementById('trigger_enabled').checked,
                    FOV_TRIGGER: document.getElementById('FOV_TRIGGER').value,
                    trigger_delays: document.getElementById('trigger_delays').value,
                    base_delay: document.getElementById('base_delay').value,
                    aimbot_key_1: document.getElementById('aimbot_key_1').value,
                    trigger_hotkey: document.getElementById('trigger_hotkey').value
                };
            }