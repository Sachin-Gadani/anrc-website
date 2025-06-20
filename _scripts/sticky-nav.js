// Sticky navigation functionality
window.addEventListener('load', function() {
    // Debug: Test if all sections exist on page load
    console.log('=== SECTION DEBUG TEST ===');
    const testSections = ['about', 'mission', 'research', 'team', 'contact'];
    testSections.forEach(id => {
        const element = document.getElementById(id);
        console.log(`Section "${id}":`, element ? 'FOUND' : 'NOT FOUND');
    });
    console.log('=== END DEBUG TEST ===');
    
    const stickyNav = document.getElementById('stickyNav');
    
    if (!stickyNav) return;
    
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollPosition = window.scrollY;
                
                // Show sticky nav after scrolling 500px down
                if (scrollPosition > 500) {
                    stickyNav.classList.add('visible');
                    updateActiveNav();
                } else {
                    stickyNav.classList.remove('visible');
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }
    
    function updateActiveNav() {
        const sections = ['about', 'mission', 'research', 'team', 'contact'];
        const stickyNavLinks = stickyNav.querySelectorAll('nav a');
        
        // Debug: Check which sections exist
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (!section) {
                console.log('Section not found:', sectionId);
            } else {
                console.log('Section found:', sectionId);
            }
        });
        
        let activeSection = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    activeSection = sectionId;
                }
            }
        });
        
        // Update active states
        stickyNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Listen for scroll events with performance optimization
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Override anchor link behavior for consistent positioning
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    // Initial state - ensure hidden
    handleScroll();
});

// Function to scroll to top when logo is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}