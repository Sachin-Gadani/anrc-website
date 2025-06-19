---
---

# Autoimmune Neurology Research Consortium
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

{% include section.html %}

## Highlights

{% capture text %}

{%
  include button.html
  link="about"
  text="Learn about us"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/index_research_ng2_dsred_cx3cr1_gfp_il33_647.png"
  link="about"
  title="About Us"
  text=text
%}

{% capture text %}

{%
  include button.html
  link="mission"
  text="Discover our mission"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/index_projects_spatial_transcriptomics_representative.png"
  link="mission"
  title="Our Mission"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/Challenger_Approaching_Jigglypuff%28SSB%29.webp"
  link="team"
  title="Our Team"
  text=text
%}
