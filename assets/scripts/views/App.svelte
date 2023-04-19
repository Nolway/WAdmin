<script lang="ts">
  import { onMount } from 'svelte';

  export let name: string;
  let div: HTMLDivElement;

  onMount(() => {
    setInterval(() => {
      div.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
    }, 1000);
  });
</script>

<div bind:this={div} class="text-red-800">Hello {name}</div>

<style lang="scss">
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
