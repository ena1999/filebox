<template>
<div class="container">
  <div class="row" style="padding-top:30px;padding-bottom:30px;">
    <div class="col-sm">
      <stavka />
    </div>
    <div class="col-sm">
      <stavka />
    </div>
    <div class="col-sm">
      <stavka />
    </div>
  </div>
</div>
</template>

<script>
import stavka from "@/components/stavka.vue";

export default {
  name: "dom",
  components: {
    stavka,
  },
};
</script>