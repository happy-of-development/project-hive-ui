<template>
  <div>
    <link href="../assets/bootstrap.min.css" rel="stylesheet">

    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">대시보드</a></li>
        <li><a href="#" class="nav-link px-2">관리</a></li>
        <li><a href="#" class="nav-link px-2">MM</a></li>
        <li><a href="#" class="nav-link px-2">이름</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
    <router-link to="/dashboard">대시보드</router-link> |
    <router-link to="/management">관리</router-link> |
    <router-link to="/mm">MM</router-link> |
    <router-link to="/profile">이름</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}

</style>