<template>
    <header>
        <nav>
            <div>
                <!-- O segredo absoluto é a barra / no começo -->
                <img src="/images/logo.svg" alt="Logo do sistema" class="logo">
            </div>
            <ul>
                <li><a href="#">Itens</a></li>
                <li><a href="#">Estoque</a></li>
                <li><a href="#">Unidades</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MenuEstoque'
}
</script>

<style scoped>
header {
    background-color: #f3f4f6;
    padding: 1rem;
}
.logo {
    width: 40px;
    height: auto;
}
ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}
</style>