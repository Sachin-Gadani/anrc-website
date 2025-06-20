---
---

<!-- Sticky Navigation Header -->
<div class="sticky-nav" id="stickyNav">
  <a href="#" class="logo" onclick="scrollToTop(); return false;">
    <img src="images/ANRC_logo_with_text.png" alt="ANRC Logo">
  </a>
  <nav>
    <a href="#about">About Us</a>
    <a href="#mission">Mission</a>
    <a href="#research">Our Research</a>
    <a href="#team">Team</a>
    <a href="#contact">Contact Us</a>
  </nav>
</div>

<div style="padding: 6rem 2rem; text-align: center; background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.08) 100%);">

<h1 style="font-size: 3rem; font-weight: 300; letter-spacing: -0.03em; margin: 0 0 2rem 0; color: var(--text);">
Welcome to ANRC
</h1>

<div style="font-size: 1.25rem; margin: 0 auto; max-width: 600px; line-height: 1.6; color: rgba(100, 116, 139, 1); font-weight: 400;">
Advancing the understanding and treatment of autoimmune neurological conditions through collaborative research and innovative scientific approaches.
</div>

</div> 

{% include section.html %}

<div id="about">
<section class="section-content" markdown="1">

# About Us

<div class="section-intro">
Understanding autoimmune neurology through collaborative research and innovative approaches to advance treatment and care.
</div>

## Our Organization

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## History

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Vision

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

</section>
</div>

{% include section.html %}

<div class="section-divider"></div>

<section id="mission" class="section-content" markdown="1">

# Mission

<div class="section-intro">
Advancing the understanding and treatment of autoimmune neurological conditions through research excellence and collaborative innovation.
</div>

## Our Mission

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Goals

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Values

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

</section>

{% include section.html %}

<div class="section-divider"></div>

<div id="research">
<section class="section-content" markdown="1">

# Our Research

<div class="section-intro">
Exploring cutting-edge approaches to understand and treat autoimmune neurological conditions through innovative research methodologies.
</div>

## Research Areas

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Current Projects

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Publications

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

</section>
</div>

{% include section.html %}

<div class="section-divider"></div>

<section id="team" class="section-content" markdown="1">

# Team

<div class="section-intro">
Meet the dedicated researchers and professionals driving innovation in autoimmune neurology research.
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}

</section>

{% include section.html dark=true %}

<div id="contact">
<section class="section-content" markdown="1">

# Contact Us

<div class="section-intro">
Connect with our team to learn more about our research initiatives and collaboration opportunities.
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Contact us at <contact@anrc.org> for more information.

{%
  include button.html
  type="email"
  text="contact@anrc.org"
  link="contact@anrc.org"
%}
{%
  include button.html
  type="address"
  tooltip="Our location"
  text="123 Research Drive
Suite 456
Anytown, ST 12345"
  link="#"
%}

{% capture col1 %}

{%
  include figure.html
  image="images/labWindow.jpg"
  caption="Our research facilities support cutting-edge investigations."
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/Downtown_Pittsburgh_from_Duquesne_Incline_in_the_morning.jpg"
  caption="Located in a vibrant research community."
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

<div style="margin-top: 3rem; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 8px;">

**ANRC**  
Autoimmune Neurology Research Consortium  
123 Research Drive, Suite 456  
Anytown, ST 12345  

</div>

</section>
</div>
