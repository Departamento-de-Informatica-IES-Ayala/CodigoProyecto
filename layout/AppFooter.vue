<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://github.com/acontrerasgonzalez/repositories" target="_blank" rel="noopener">Creative Adri</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://github.com/acontrerasgonzalez/repositories" class="nav-link" target="_blank" rel="noopener">Creative Adri</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/sobrenosotros" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
