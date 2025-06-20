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
{{ site.data.content.hero.title }}
</h1>

<div style="font-size: 1.25rem; margin: 0 auto; max-width: 600px; line-height: 1.6; color: rgba(100, 116, 139, 1); font-weight: 400;">
{{ site.data.content.hero.description }}
</div>

</div> 

{% include section.html %}

<div id="about">
<section class="section-content" markdown="1">

# {{ site.data.content.about.title }}

<div class="section-intro">
{{ site.data.content.about.intro }}
</div>

## {{ site.data.content.about.organization.title }}

{{ site.data.content.about.organization.content }}

## {{ site.data.content.about.history.title }}

{{ site.data.content.about.history.content }}

## {{ site.data.content.about.vision.title }}

{{ site.data.content.about.vision.content }}

</section>
</div>

{% include section.html %}

<div class="section-divider"></div>

<section id="mission" class="section-content" markdown="1">

# {{ site.data.content.mission.title }}

<div class="section-intro">
{{ site.data.content.mission.intro }}
</div>

## {{ site.data.content.mission.our_mission.title }}

{{ site.data.content.mission.our_mission.content }}

## {{ site.data.content.mission.goals.title }}

{{ site.data.content.mission.goals.content }}

## {{ site.data.content.mission.values.title }}

{{ site.data.content.mission.values.content }}

</section>

{% include section.html %}

<div class="section-divider"></div>

<div id="research">
<section class="section-content" markdown="1">

# {{ site.data.content.research.title }}

<div class="section-intro">
{{ site.data.content.research.intro }}
</div>

## {{ site.data.content.research.research_areas.title }}

{{ site.data.content.research.research_areas.content }}

## {{ site.data.content.research.current_projects.title }}

{{ site.data.content.research.current_projects.content }}

## {{ site.data.content.research.publications.title }}

{{ site.data.content.research.publications.content }}

</section>
</div>

{% include section.html %}

<div class="section-divider"></div>

<section id="team" class="section-content" markdown="1">

# {{ site.data.content.team.title }}

<div class="section-intro">
{{ site.data.content.team.intro }}
</div>

{{ site.data.content.team.content }}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}

</section>

{% include section.html dark=true %}

<div id="contact">
<section class="section-content" markdown="1">

# {{ site.data.content.contact.title }}

<div class="section-intro">
{{ site.data.content.contact.intro }}
</div>

{{ site.data.content.contact.content }}

{%
  include button.html
  type="email"
  text=site.data.content.contact.email
  link=site.data.content.contact.email
%}
{%
  include button.html
  type="address"
  tooltip="Our location"
  text=site.data.content.contact.address.line1
  link="#"
%}

{% capture col1 %}

{%
  include figure.html
  image="images/labWindow.jpg"
  caption=site.data.content.contact.images.lab_caption
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/Downtown_Pittsburgh_from_Duquesne_Incline_in_the_morning.jpg"
  caption=site.data.content.contact.images.location_caption
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

<div style="margin-top: 3rem; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 8px;">

**{{ site.data.content.contact.footer_info.organization }}**  
{{ site.data.content.contact.footer_info.full_name }}  
{{ site.data.content.contact.footer_info.address_block }}  

</div>

</section>
</div>
