<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>
<template>
  <div :class="$style.row">
    <p>{{ t('translation.noData') }}</p>
  </div>
</template>
<style module>
.row p {
  text-align: center;
}
</style>
