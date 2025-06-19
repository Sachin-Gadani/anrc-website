---
title: Contact Us
nav:
  order: 4
  tooltip: Get in touch with us
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact Us

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

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/labWindow.jpg"
  caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/Downtown_Pittsburgh_from_Duquesne_Incline_in_the_morning.jpg"
  caption="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
ANRC\
Autoimmune Neurology Research Consortium\
123 Research Drive\
Suite 456\
Anytown, ST 12345\

{% endcapture %}

{% capture col2 %}

{% endcapture %}

{% capture col3 %}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}