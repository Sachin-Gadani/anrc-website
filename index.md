---
---

<!-- Sticky Navigation Header that appears on scroll -->
<div class="sticky-nav" id="stickyNav">
  <a href="#" class="logo" onclick="scrollToTop(); return false;">
    <img src="images/logo2.png" alt="ANRC Logo">
  </a>
  <nav>
    <a href="#about">About Us</a>
    <a href="#mission">Mission</a>
    <a href="#research">Our Research</a>
    <a href="#team">Team</a>
    <a href="#contact">Contact Us</a>
  </nav>
</div>

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">
      {{ site.data.content.hero.title }}
    </h1>
    <h2 class="hero-subtitle">
      {{ site.data.content.hero.subtitle }}
    </h2>
    <p class="hero-description">
      {{ site.data.content.hero.description }}
    </p>
  </div>
</div>

<div id="about">
<section class="section-content" markdown="1">

# {{ site.data.content.about.title }}

<div class="section-intro">
{{ site.data.content.about.intro }}
</div>

<div class="about-columns">
  <div class="about-column">
    <h2>{{ site.data.content.about.organization.title }}</h2>
    <p>{{ site.data.content.about.organization.content }}</p>
  </div>
  
  <div class="about-column">
    <h2>{{ site.data.content.about.history.title }}</h2>
    <p>{{ site.data.content.about.history.content }}</p>
  </div>
  
  <div class="about-column">
    <h2>{{ site.data.content.about.vision.title }}</h2>
    <p>{{ site.data.content.about.vision.content }}</p>
  </div>
</div>

<div class="institution-map-section">
  <h2>Our National Network</h2>
  <p>ANRC brings together leading research institutions from across the United States, creating a powerful collaborative network that spans the nation.</p>
  
  <!-- Institution map -->
  <div class="institution-map">
    <img src="images/ANRC_Institution_Map (March 2025).png" alt="ANRC Collaborating Institutions Map" />
    <p class="map-caption">ANRC collaborating institutions across the United States, working together to advance autoimmune neurology research</p>
  </div>
</div>

</section>
</div>

<div id="mission">
<section class="section-content" markdown="1">

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
</div>

{% include section.html %}

<div id="research">
<section class="section-content" markdown="1">

# {{ site.data.content.research.title }}

<div class="section-intro">
{{ site.data.content.research.intro }}
</div>

## {{ site.data.content.research.featured_publication.title }}

<div class="featured-publication">
  <h3>{{ site.data.content.research.featured_publication.paper_title }}</h3>
  <p class="publication-authors">{{ site.data.content.research.featured_publication.authors }}</p>
  <p>{{ site.data.content.research.featured_publication.description }}</p>
  <a href="{{ site.data.content.research.featured_publication.link }}" class="publication-link" target="_blank">
    <i class="fas fa-external-link-alt"></i> View on PubMed
  </a>
</div>

## {{ site.data.content.research.research_areas.title }}

{{ site.data.content.research.research_areas.content }}

## {{ site.data.content.research.current_projects.title }}

{{ site.data.content.research.current_projects.content }}

## {{ site.data.content.research.publications.title }}

{{ site.data.content.research.publications.content }}

</section>
</div>

<div id="team">
<section class="section-content" markdown="1">

# {{ site.data.content.team.title }}

<div class="section-intro">
{{ site.data.content.team.intro }}
</div>

{{ site.data.content.team.content }}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}

</section>
</div>

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
