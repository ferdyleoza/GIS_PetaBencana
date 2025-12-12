// Data Bencana (Simulasi)
const disasterData = [
    // Gempa Bumi
    { id: 1, type: 'gempa', name: 'Gempa Bumi Palu', location: 'Palu, Sulawesi Tengah', lat: -0.8917, lng: 119.8707, severity: 'tinggi', magnitude: '7.5 SR', casualties: 2045, date: '2024-11-15', description: 'Gempa bumi berkekuatan 7.5 SR mengguncang Palu dan sekitarnya, menyebabkan likuifaksi dan kerusakan parah.' },
    { id: 2, type: 'gempa', name: 'Gempa Cianjur', location: 'Cianjur, Jawa Barat', lat: -6.8167, lng: 107.1425, severity: 'tinggi', magnitude: '5.6 SR', casualties: 335, date: '2024-11-20', description: 'Gempa berkekuatan 5.6 SR melanda Cianjur, merusak ribuan rumah dan fasilitas umum.' },
    { id: 3, type: 'gempa', name: 'Gempa Lombok', location: 'Lombok, NTB', lat: -8.6500, lng: 116.3242, severity: 'sedang', magnitude: '6.9 SR', casualties: 564, date: '2024-10-05', description: 'Gempa bumi berkekuatan 6.9 SR mengguncang Lombok dan sekitarnya.' },
    { id: 4, type: 'gempa', name: 'Gempa Yogyakarta', location: 'Bantul, Yogyakarta', lat: -7.8883, lng: 110.3298, severity: 'tinggi', magnitude: '6.3 SR', casualties: 150, date: '2024-09-12', description: 'Gempa tektonik merusak ribuan bangunan di Yogyakarta.' },
    
    // Tsunami
    { id: 5, type: 'tsunami', name: 'Tsunami Aceh', location: 'Banda Aceh', lat: 5.5483, lng: 95.3238, severity: 'tinggi', magnitude: '30 meter', casualties: 1200, date: '2024-11-25', description: 'Tsunami setinggi 30 meter menerjang pesisir Aceh setelah gempa besar di Samudera Hindia.' },
    { id: 6, type: 'tsunami', name: 'Tsunami Banten', location: 'Pandeglang, Banten', lat: -6.3090, lng: 105.6485, severity: 'sedang', magnitude: '5 meter', casualties: 437, date: '2024-10-18', description: 'Tsunami akibat aktivitas Gunung Anak Krakatau melanda pesisir Banten.' },
    { id: 7, type: 'tsunami', name: 'Tsunami Mentawai', location: 'Kepulauan Mentawai', lat: -2.0858, lng: 99.6542, severity: 'sedang', magnitude: '8 meter', casualties: 312, date: '2024-09-28', description: 'Gelombang tsunami menghantam Kepulauan Mentawai.' },
    
    // Banjir
    { id: 8, type: 'banjir', name: 'Banjir Jakarta', location: 'Jakarta', lat: -6.2088, lng: 106.8456, severity: 'tinggi', magnitude: '3 meter', casualties: 67, date: '2024-12-01', description: 'Banjir besar melanda Jakarta akibat hujan deras dan luapan Sungai Ciliwung.' },
    { id: 9, type: 'banjir', name: 'Banjir Semarang', location: 'Semarang, Jawa Tengah', lat: -6.9667, lng: 110.4167, severity: 'sedang', magnitude: '1.5 meter', casualties: 23, date: '2024-11-28', description: 'Banjir menggenangi beberapa wilayah di Semarang.' },
    { id: 10, type: 'banjir', name: 'Banjir Bandung', location: 'Bandung, Jawa Barat', lat: -6.9175, lng: 107.6191, severity: 'sedang', magnitude: '1 meter', casualties: 15, date: '2024-11-22', description: 'Banjir bandang melanda beberapa kecamatan di Bandung.' },
    { id: 11, type: 'banjir', name: 'Banjir Kalimantan', location: 'Banjarmasin', lat: -3.3194, lng: 114.5903, severity: 'tinggi', magnitude: '2 meter', casualties: 45, date: '2024-11-10', description: 'Banjir besar melanda Kalimantan Selatan.' },
    { id: 12, type: 'banjir', name: 'Banjir Medan', location: 'Medan, Sumatra Utara', lat: 3.5952, lng: 98.6722, severity: 'rendah', magnitude: '0.8 meter', casualties: 8, date: '2024-10-30', description: 'Banjir ringan di beberapa titik Kota Medan.' },
    
    // Tanah Longsor
    { id: 13, type: 'longsor', name: 'Longsor Ponorogo', location: 'Ponorogo, Jawa Timur', lat: -7.8696, lng: 111.4619, severity: 'tinggi', magnitude: 'Besar', casualties: 32, date: '2024-11-18', description: 'Tanah longsor menimbun pemukiman warga di lereng gunung.' },
    { id: 14, type: 'longsor', name: 'Longsor Sukabumi', location: 'Sukabumi, Jawa Barat', lat: -6.9278, lng: 106.9271, severity: 'sedang', magnitude: 'Sedang', casualties: 18, date: '2024-11-05', description: 'Longsor melanda perkebunan teh di Sukabumi.' },
    { id: 15, type: 'longsor', name: 'Longsor Purworejo', location: 'Purworejo, Jawa Tengah', lat: -7.7167, lng: 110.0083, severity: 'rendah', magnitude: 'Kecil', casualties: 5, date: '2024-10-20', description: 'Longsor kecil menutup akses jalan di Purworejo.' },
    { id: 16, type: 'longsor', name: 'Longsor Brebes', location: 'Brebes, Jawa Tengah', lat: -6.8733, lng: 109.0425, severity: 'sedang', magnitude: 'Sedang', casualties: 12, date: '2024-10-08', description: 'Tanah longsor merusak lahan pertanian.' },
    
    // Gunung Berapi
    { id: 17, type: 'gunung', name: 'Erupsi Merapi', location: 'Gunung Merapi, Yogyakarta', lat: -7.5407, lng: 110.4456, severity: 'tinggi', magnitude: 'Level 4', casualties: 89, date: '2024-11-30', description: 'Gunung Merapi meletus dengan kolom abu setinggi 5000 meter.' },
    { id: 18, type: 'gunung', name: 'Erupsi Semeru', location: 'Gunung Semeru, Jawa Timur', lat: -8.1081, lng: 112.9225, severity: 'tinggi', magnitude: 'Level 4', casualties: 51, date: '2024-11-12', description: 'Semeru erupsi dengan awan panas dan aliran lava.' },
    { id: 19, type: 'gunung', name: 'Erupsi Sinabung', location: 'Gunung Sinabung, Sumatra Utara', lat: 3.1700, lng: 98.3920, severity: 'sedang', magnitude: 'Level 3', casualties: 16, date: '2024-10-25', description: 'Aktivitas erupsi Gunung Sinabung meningkat.' },
    { id: 20, type: 'gunung', name: 'Erupsi Krakatau', location: 'Anak Krakatau, Banten', lat: -6.1020, lng: 105.4233, severity: 'sedang', magnitude: 'Level 3', casualties: 8, date: '2024-10-15', description: 'Erupsi Anak Krakatau dengan lontaran material vulkanik.' },
    
    // Kebakaran Hutan
    { id: 21, type: 'kebakaran', name: 'Kebakaran Riau', location: 'Riau', lat: 0.2933, lng: 101.7068, severity: 'tinggi', magnitude: '50.000 ha', casualties: 28, date: '2024-12-05', description: 'Kebakaran hutan dan lahan gambut meluas di Riau, asap tebal menyelimuti wilayah.' },
    { id: 22, type: 'kebakaran', name: 'Kebakaran Kalimantan', location: 'Kalimantan Tengah', lat: -1.6815, lng: 113.3824, severity: 'tinggi', magnitude: '35.000 ha', casualties: 19, date: '2024-11-08', description: 'Kebakaran hutan skala besar di Kalimantan Tengah.' },
    { id: 23, type: 'kebakaran', name: 'Kebakaran Jambi', location: 'Jambi', lat: -1.6101, lng: 103.6131, severity: 'sedang', magnitude: '15.000 ha', casualties: 12, date: '2024-10-22', description: 'Kebakaran lahan dan hutan di Jambi menimbulkan kabut asap.' },
    { id: 24, type: 'kebakaran', name: 'Kebakaran Sumatra Selatan', location: 'Sumatra Selatan', lat: -3.3194, lng: 104.9147, severity: 'sedang', magnitude: '12.000 ha', casualties: 7, date: '2024-09-18', description: 'Kebakaran hutan di beberapa titik Sumsel.' }
];

// Configuration
const config = {
    colors: {
        gempa: '#e74c3c',
        tsunami: '#3498db',
        banjir: '#2980b9',
        longsor: '#8b4513',
        gunung: '#e67e22',
        kebakaran: '#c0392b'
    },
    icons: {
        gempa: 'fa-house-damage',
        tsunami: 'fa-water',
        banjir: 'fa-house-flood-water',
        longsor: 'fa-mountain',
        gunung: 'fa-volcano',
        kebakaran: 'fa-fire'
    }
};

// Global variables
let map;
let markers = [];
let markerClusterGroup;
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initFilters();
    initNavigation();
    initDashboard();
    updateRecentDisasters();
    updateStatsSummary();
    initCharts();
    
    // Show toast welcome message
    showToast('Selamat datang di Sistem Informasi Geografis Kebencanaan Indonesia', 'success');
});

// Initialize map
function initMap() {
    // Create map centered on Indonesia
    map = L.map('map').setView([-2.5489, 118.0149], 5);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Initialize marker cluster group
    markerClusterGroup = L.markerClusterGroup({
        maxClusterRadius: 50,
        iconCreateFunction: function(cluster) {
            const childCount = cluster.getChildCount();
            return L.divIcon({
                html: '<div style="background: #3498db; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 3px 10px rgba(0,0,0,0.3);">' + childCount + '</div>',
                className: 'custom-cluster-icon',
                iconSize: L.point(40, 40)
            });
        }
    });
    
    map.addLayer(markerClusterGroup);
    
    // Add all markers
    updateMarkers();
    
    // Map controls
    document.getElementById('locateBtn').addEventListener('click', function() {
        map.locate({setView: true, maxZoom: 12});
        showToast('Mencari lokasi Anda...', 'info');
    });
    
    map.on('locationfound', function(e) {
        L.marker(e.latlng).addTo(map)
            .bindPopup('Lokasi Anda')
            .openPopup();
        showToast('Lokasi ditemukan!', 'success');
    });
    
    map.on('locationerror', function() {
        showToast('Tidak dapat menemukan lokasi Anda', 'error');
    });
    
    document.getElementById('refreshBtn').addEventListener('click', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            this.style.transform = '';
            updateMarkers();
            updateRecentDisasters();
            updateStatsSummary();
            showToast('Data diperbarui!', 'success');
        }, 500);
    });
    
    document.getElementById('fullscreenBtn').addEventListener('click', function() {
        const mapContainer = document.getElementById('mapView');
        if (!document.fullscreenElement) {
            mapContainer.requestFullscreen();
            this.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            document.exitFullscreen();
            this.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });
}

// Create marker for disaster
function createMarker(disaster) {
    const color = config.colors[disaster.type];
    const icon = config.icons[disaster.type];
    
    const customIcon = L.divIcon({
        html: `<div class="custom-marker" style="background-color: ${color}; width: 35px; height: 35px;">
                <i class="fas ${icon}"></i>
               </div>`,
        className: '',
        iconSize: [35, 35]
    });
      const marker = L.marker([disaster.lat, disaster.lng], { 
        icon: customIcon,
        disasterData: disaster
    });
    
    const popupContent = createPopupContent(disaster);
    marker.bindPopup(popupContent, { maxWidth: 350 });
    
    return marker;
}

// Create popup content
function createPopupContent(disaster) {
    const color = config.colors[disaster.type];
    const icon = config.icons[disaster.type];
    const severityText = disaster.severity === 'tinggi' ? 'Tinggi' : 
                         disaster.severity === 'sedang' ? 'Sedang' : 'Rendah';
    
    return `
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-icon" style="background-color: ${color};">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="popup-title">
                    <h3>${disaster.name}</h3>
                    <span class="severity-badge ${disaster.severity}">${severityText}</span>
                </div>
            </div>
            <div class="popup-details">
                <div class="popup-detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${disaster.location}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(disaster.date)}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-chart-line"></i>
                    <span>Magnitude: ${disaster.magnitude}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-users"></i>
                    <span>Korban: ${disaster.casualties} orang</span>
                </div>
            </div>
            <p style="color: #7f8c8d; margin-bottom: 1rem;">${disaster.description}</p>
            <div class="popup-actions">
                <button class="popup-btn popup-btn-primary" onclick="showDisasterDetail(${disaster.id})">
                    <i class="fas fa-info-circle"></i> Detail
                </button>
                <button class="popup-btn popup-btn-secondary" onclick="shareDisaster(${disaster.id})">
                    <i class="fas fa-share-alt"></i> Bagikan
                </button>
            </div>
        </div>
    `;
}

// Update markers based on filters
function updateMarkers() {
    markerClusterGroup.clearLayers();
    markers = [];
    
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData.filter(disaster => 
        activeTypes.includes(disaster.type) && 
        activeSeverities.includes(disaster.severity)
    );
    
    filteredData.forEach(disaster => {
        const marker = createMarker(disaster);
        markers.push(marker);
        markerClusterGroup.addLayer(marker);
    });
}

// Get active filters
function getActiveFilters(className) {
    const checkboxes = document.querySelectorAll(`.${className}:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Initialize filters
function initFilters() {
    const disasterFilters = document.querySelectorAll('.disaster-filter');
    const severityFilters = document.querySelectorAll('.severity-filter');
    
    disasterFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            updateMarkers();
            updateRecentDisasters();
            updateStatsSummary();
            updateDashboardStats();
            renderDisasterCards();
            updateCharts();
        });
    });
    
    severityFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            updateMarkers();
            updateRecentDisasters();
            updateStatsSummary();
            updateDashboardStats();
            renderDisasterCards();
            updateCharts();
        });
    });
}

// Initialize navigation
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            
            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding view
            document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
            document.getElementById(`${view}View`).classList.add('active');
            
            // Invalidate map size when switching to map view
            if (view === 'map') {
                setTimeout(() => map.invalidateSize(), 100);
            }
              // Update charts when switching to statistics view
            if (view === 'statistics') {
                updateCharts();
            }
            
            // Update dashboard when switching to dashboard view
            if (view === 'dashboard') {
                updateDashboardStats();
            }
        });
    });
}

// Initialize Dashboard
function initDashboard() {
    updateDashboardStats();
    renderDisasterCards();
    initAccordion();
}

// Initialize Accordion
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.info-accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.info-accordion-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Update Dashboard Statistics
function updateDashboardStats() {
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData.filter(disaster => 
        activeTypes.includes(disaster.type) && 
        activeSeverities.includes(disaster.severity)
    );
    
    // Total kejadian
    document.getElementById('dash-total').textContent = filteredData.length;
    
    // Bahaya tinggi
    const highSeverity = filteredData.filter(d => d.severity === 'tinggi').length;
    document.getElementById('dash-high').textContent = highSeverity;
    
    // Total korban
    const totalCasualties = filteredData.reduce((sum, d) => sum + d.casualties, 0);
    document.getElementById('dash-casualties').textContent = totalCasualties.toLocaleString();
    
    // Bulan ini
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const thisMonth = filteredData.filter(d => {
        const disasterDate = new Date(d.date);
        return disasterDate.getMonth() === currentMonth && 
               disasterDate.getFullYear() === currentYear;
    }).length;
    document.getElementById('dash-recent').textContent = thisMonth;
}

// Render Disaster Cards
function renderDisasterCards() {
    const container = document.getElementById('disasterCards');
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData.filter(disaster => 
        activeTypes.includes(disaster.type) && 
        activeSeverities.includes(disaster.severity)
    );
    
    // Sort by date (newest first)
    const sortedData = filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = sortedData.map(disaster => `
        <div class="disaster-card ${disaster.type}">
            <div class="disaster-card-header">
                <div class="disaster-card-icon ${disaster.type}">
                    <i class="fas ${config.icons[disaster.type]}"></i>
                </div>
                <span class="disaster-severity-badge ${disaster.severity}">${disaster.severity.toUpperCase()}</span>
            </div>
            <div class="disaster-card-body">
                <h4 class="disaster-card-title">${disaster.name}</h4>
                <div class="disaster-card-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${disaster.location}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(disaster.date)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-users"></i>
                        <span>${disaster.casualties} korban</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chart-line"></i>
                        <span>${disaster.magnitude}</span>
                    </div>
                </div>
                <p class="disaster-card-description">${disaster.description}</p>
            </div>
            <div class="disaster-card-footer">
                <button class="btn-view-map" onclick="viewDisasterOnMap(${disaster.id})">
                    <i class="fas fa-map-marked-alt"></i> Lihat Peta
                </button>
                <button class="btn-detail" onclick="showDisasterDetail(${disaster.id})">
                    <i class="fas fa-info-circle"></i> Detail
                </button>
            </div>
        </div>
    `).join('');
}

// View disaster on map
function viewDisasterOnMap(disasterId) {
    const disaster = disasterData.find(d => d.id === disasterId);
    if (!disaster) return;
    
    // Switch to map view
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.nav-btn[data-view="map"]').classList.add('active');
    
    document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
    document.getElementById('mapView').classList.add('active');
    
    // Wait for map to be visible, then center and zoom
    setTimeout(() => {
        map.invalidateSize();
        map.setView([disaster.lat, disaster.lng], 12);
        
        // Find and open the marker popup
        markers.forEach(marker => {
            const markerData = marker.options.disasterData;
            if (markerData && markerData.id === disasterId) {
                marker.openPopup();
            }
        });
        
        showToast(`Menampilkan lokasi: ${disaster.name}`, 'info');
    }, 100);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Update recent disasters list
function updateRecentDisasters() {
    const container = document.getElementById('recentDisasters');
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData
        .filter(disaster => 
            activeTypes.includes(disaster.type) && 
            activeSeverities.includes(disaster.severity)
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    
    if (filteredData.length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d; text-align: center;">Tidak ada data</p>';
        return;
    }
    
    container.innerHTML = filteredData.map(disaster => {
        const color = config.colors[disaster.type];
        const icon = config.icons[disaster.type];
        const typeName = getDisasterTypeName(disaster.type);
        
        return `
            <div class="recent-item" onclick="focusOnDisaster(${disaster.id})" style="border-left-color: ${color};">
                <div class="recent-item-header">
                    <div class="recent-item-type" style="color: ${color};">
                        <i class="fas ${icon}"></i>
                        ${typeName}
                    </div>
                    <div class="recent-item-date">${formatDate(disaster.date)}</div>
                </div>
                <div class="recent-item-location">
                    <i class="fas fa-map-marker-alt"></i> ${disaster.location}
                </div>
            </div>
        `;
    }).join('');
}

// Update stats summary
function updateStatsSummary() {
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData.filter(disaster => 
        activeTypes.includes(disaster.type) && 
        activeSeverities.includes(disaster.severity)
    );
    
    const highSeverity = filteredData.filter(d => d.severity === 'tinggi').length;
    const mediumSeverity = filteredData.filter(d => d.severity === 'sedang').length;
    const lowSeverity = filteredData.filter(d => d.severity === 'rendah').length;
    
    document.getElementById('totalEvents').textContent = filteredData.length;
    document.getElementById('highSeverity').textContent = highSeverity;
    document.getElementById('mediumSeverity').textContent = mediumSeverity;
    document.getElementById('lowSeverity').textContent = lowSeverity;
}

// Initialize charts
function initCharts() {
    // Disaster Type Chart
    const typeCtx = document.getElementById('disasterTypeChart');
    if (typeCtx) {
        charts.typeChart = new Chart(typeCtx, {
            type: 'doughnut',
            data: {
                labels: ['Gempa Bumi', 'Tsunami', 'Banjir', 'Tanah Longsor', 'Gunung Berapi', 'Kebakaran Hutan'],
                datasets: [{
                    data: [
                        disasterData.filter(d => d.type === 'gempa').length,
                        disasterData.filter(d => d.type === 'tsunami').length,
                        disasterData.filter(d => d.type === 'banjir').length,
                        disasterData.filter(d => d.type === 'longsor').length,
                        disasterData.filter(d => d.type === 'gunung').length,
                        disasterData.filter(d => d.type === 'kebakaran').length
                    ],
                    backgroundColor: [
                        config.colors.gempa,
                        config.colors.tsunami,
                        config.colors.banjir,
                        config.colors.longsor,
                        config.colors.gunung,
                        config.colors.kebakaran
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Severity Chart
    const severityCtx = document.getElementById('severityChart');
    if (severityCtx) {
        charts.severityChart = new Chart(severityCtx, {
            type: 'pie',
            data: {
                labels: ['Tinggi', 'Sedang', 'Rendah'],
                datasets: [{
                    data: [
                        disasterData.filter(d => d.severity === 'tinggi').length,
                        disasterData.filter(d => d.severity === 'sedang').length,
                        disasterData.filter(d => d.severity === 'rendah').length
                    ],
                    backgroundColor: ['#e74c3c', '#f39c12', '#27ae60']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Trend Chart
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        charts.trendChart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Sep', 'Okt', 'Nov', 'Des'],
                datasets: [{
                    label: 'Kejadian Bencana',
                    data: [8, 10, 13, 5],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Regional Chart
    const regionalCtx = document.getElementById('regionalChart');
    if (regionalCtx) {
        charts.regionalChart = new Chart(regionalCtx, {
            type: 'bar',
            data: {
                labels: ['Jawa', 'Sumatra', 'Kalimantan', 'Sulawesi', 'Nusa Tenggara'],
                datasets: [{
                    label: 'Jumlah Kejadian',
                    data: [10, 6, 3, 2, 3],
                    backgroundColor: '#3498db'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Create detailed table
    createDetailedTable();
}

// Update charts
function updateCharts() {
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData.filter(disaster => 
        activeTypes.includes(disaster.type) && 
        activeSeverities.includes(disaster.severity)
    );
    
    // Update type chart
    if (charts.typeChart) {
        charts.typeChart.data.datasets[0].data = [
            filteredData.filter(d => d.type === 'gempa').length,
            filteredData.filter(d => d.type === 'tsunami').length,
            filteredData.filter(d => d.type === 'banjir').length,
            filteredData.filter(d => d.type === 'longsor').length,
            filteredData.filter(d => d.type === 'gunung').length,
            filteredData.filter(d => d.type === 'kebakaran').length
        ];
        charts.typeChart.update();
    }
    
    // Update severity chart
    if (charts.severityChart) {
        charts.severityChart.data.datasets[0].data = [
            filteredData.filter(d => d.severity === 'tinggi').length,
            filteredData.filter(d => d.severity === 'sedang').length,
            filteredData.filter(d => d.severity === 'rendah').length
        ];
        charts.severityChart.update();
    }
    
    createDetailedTable();
}

// Create detailed table
function createDetailedTable() {
    const container = document.getElementById('detailedTable');
    const activeTypes = getActiveFilters('disaster-filter');
    const activeSeverities = getActiveFilters('severity-filter');
    
    const filteredData = disasterData
        .filter(disaster => 
            activeTypes.includes(disaster.type) && 
            activeSeverities.includes(disaster.severity)
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Jenis</th>
                    <th>Lokasi</th>
                    <th>Magnitude</th>
                    <th>Korban</th>
                    <th>Tingkat</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    filteredData.forEach(disaster => {
        const typeName = getDisasterTypeName(disaster.type);
        const severityText = disaster.severity === 'tinggi' ? 'Tinggi' : 
                            disaster.severity === 'sedang' ? 'Sedang' : 'Rendah';
        
        html += `
            <tr>
                <td>${formatDate(disaster.date)}</td>
                <td>${typeName}</td>
                <td>${disaster.location}</td>
                <td>${disaster.magnitude}</td>
                <td>${disaster.casualties}</td>
                <td><span class="severity-badge ${disaster.severity}">${severityText}</span></td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
}

// Focus on disaster
function focusOnDisaster(id) {
    const disaster = disasterData.find(d => d.id === id);
    if (!disaster) return;
    
    // Switch to map view
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-view="map"]').classList.add('active');
    document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
    document.getElementById('mapView').classList.add('active');
    
    // Focus map on disaster
    map.setView([disaster.lat, disaster.lng], 10);
    
    // Find and open popup
    setTimeout(() => {
        const marker = markers.find(m => m.disasterData.id === id);
        if (marker) {
            marker.openPopup();
        }
    }, 300);
}

// Show disaster detail in modal
function showDisasterDetail(id) {
    const disaster = disasterData.find(d => d.id === id);
    if (!disaster) return;
    
    const modal = document.getElementById('disasterModal');
    const modalBody = document.getElementById('modalBody');
    
    const color = config.colors[disaster.type];
    const icon = config.icons[disaster.type];
    const typeName = getDisasterTypeName(disaster.type);
    const severityText = disaster.severity === 'tinggi' ? 'Tinggi' : 
                         disaster.severity === 'sedang' ? 'Sedang' : 'Rendah';
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div class="info-icon" style="background: ${color}; margin: 0 auto;">
                <i class="fas ${icon}"></i>
            </div>
            <h2 style="color: #2c3e50; margin: 1rem 0;">${disaster.name}</h2>
            <span class="severity-badge ${disaster.severity}">${severityText}</span>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <h3 style="color: #2c3e50; margin-bottom: 0.5rem;">Informasi Detail</h3>
            <div style="display: grid; gap: 0.75rem;">
                <div class="popup-detail-item">
                    <i class="fas fa-tag"></i>
                    <span><strong>Jenis:</strong> ${typeName}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><strong>Lokasi:</strong> ${disaster.location}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-calendar"></i>
                    <span><strong>Tanggal:</strong> ${formatDate(disaster.date)}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-chart-line"></i>
                    <span><strong>Magnitude:</strong> ${disaster.magnitude}</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-users"></i>
                    <span><strong>Korban Jiwa:</strong> ${disaster.casualties} orang</span>
                </div>
                <div class="popup-detail-item">
                    <i class="fas fa-globe"></i>
                    <span><strong>Koordinat:</strong> ${disaster.lat.toFixed(4)}, ${disaster.lng.toFixed(4)}</span>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <h3 style="color: #2c3e50; margin-bottom: 0.5rem;">Deskripsi</h3>
            <p style="color: #7f8c8d; line-height: 1.6;">${disaster.description}</p>
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem;">
            <button class="popup-btn popup-btn-primary" onclick="focusOnDisaster(${disaster.id}); closeModal();" style="flex: 1;">
                <i class="fas fa-map"></i> Lihat di Peta
            </button>
            <button class="popup-btn popup-btn-secondary" onclick="shareDisaster(${disaster.id})" style="flex: 1;">
                <i class="fas fa-share-alt"></i> Bagikan
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };
}

// Close modal
function closeModal() {
    document.getElementById('disasterModal').classList.remove('active');
}

// Setup modal close button
document.querySelector('.modal-close').addEventListener('click', closeModal);

// Share disaster
function shareDisaster(id) {
    const disaster = disasterData.find(d => d.id === id);
    if (!disaster) return;
    
    const text = `🚨 Informasi Bencana: ${disaster.name}\n📍 Lokasi: ${disaster.location}\n📅 Tanggal: ${formatDate(disaster.date)}\n\nSistem Informasi Geografis Kebencanaan Indonesia`;
    
    if (navigator.share) {
        navigator.share({
            title: disaster.name,
            text: text
        }).then(() => {
            showToast('Berhasil dibagikan!', 'success');
        }).catch(() => {
            copyToClipboard(text);
        });
    } else {
        copyToClipboard(text);
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Informasi disalin ke clipboard!', 'success');
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

// Get disaster type name
function getDisasterTypeName(type) {
    const names = {
        gempa: 'Gempa Bumi',
        tsunami: 'Tsunami',
        banjir: 'Banjir',
        longsor: 'Tanah Longsor',
        gunung: 'Gunung Berapi',
        kebakaran: 'Kebakaran Hutan'
    };
    return names[type] || type;
}
