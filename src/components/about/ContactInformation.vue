<template>
  <div class="links-wrapper">
    <a class="link" href="mailto:gifestum@gmail.com" target="_blank">
      <i class="pi pi-envelope" style="color: slateblue"></i>
      <p>Email</p>
    </a>
    <a class="link" href="https://t.me/Yevhen_1990" target="_blank">
      <i class="pi pi-telegram" style="color: slateblue"></i>
      <p>Telegram</p>
    </a>
    <a
      class="link"
      href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD-%D0%B7%D1%8E%D1%81%D0%BA%D1%96%D0%BD-031b7b23b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpQGh7licQY%2Bg%2FUjQXz4vOg%3D%3D"
      target="_blank"
    >
      <i class="pi pi-linkedin" style="color: slateblue"></i>
      <p>Linkedin</p>
    </a>
    <a class="link" href="https://github.com/Yevhenns" target="_blank">
      <i class="pi pi-github" style="color: slateblue"></i>
      <p>Github</p>
    </a>
  </div>
</template>

<style scoped>
.links-wrapper {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  .link {
    height: 48px;
    padding: 0 16px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid slateblue;
    transition: all 250ms linear;
    color: slateblue;

    p {
      font-weight: 600;
    }

    &:hover {
      @media (min-width: 769px) {
        transform: translateY(-4px);
      }
    }
  }
}
</style>
