<script setup>
</script>
<template>
  <div class="container bg-primary mt-[20px]">
    <div class="wrapper">
      <footer class="bg-base-200 text-base-content p-10 text-white">
        <!-- Sử dụng grid layout với 4 cột -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <!-- Phần Services -->
          <nav>
            <h6 class="text-lg font-semibold mb-4">Services</h6>
            <a href="#" class="block text-base hover:text-blue-500">Branding</a>
            <a href="#" class="block text-base hover:text-blue-500">Design</a>
            <a href="#" class="block text-base hover:text-blue-500">Marketing</a>
            <a href="#" class="block text-base hover:text-blue-500">Advertisement</a>
          </nav>

          <!-- Phần Company -->
          <nav>
            <h6 class="text-lg font-semibold mb-4">Company</h6>
            <a href="#" class="block text-base hover:text-blue-500">About us</a>
            <a href="#" class="block text-base hover:text-blue-500">Contact</a>
            <a href="#" class="block text-base hover:text-blue-500">Jobs</a>
            <a href="#" class="block text-base hover:text-blue-500">Press kit</a>
          </nav>

          <!-- Phần Legal -->
          <nav>
            <h6 class="text-lg font-semibold mb-4">Legal</h6>
            <a href="#" class="block text-base hover:text-blue-500">Terms of use</a>
            <a href="#" class="block text-base hover:text-blue-500">Privacy policy</a>
            <a href="#" class="block text-base hover:text-blue-500">Cookie policy</a>
          </nav>

          <!-- Phần Newsletter -->
          <form>
            <h6 class="text-lg font-semibold mb-4">Newsletter</h6>
            <fieldset class="w-80">
              <label class="block text-sm mb-2">Enter your email address</label>
              <div class="flex gap-2">
                <input
                  type="text"
                  placeholder="username@site.com"
                  class="input input-bordered w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                  class="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>

        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Bạn có thể thêm các kiểu CSS tại đây nếu cần */
</style>
