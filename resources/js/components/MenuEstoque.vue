<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="d-flex ">
                <a class="navbar-brand" href="/home">
                    <img src="/images/logo.svg" alt="Logo do sistema" class="logo">
                </a>
                <div>
                    <p>Estoque Pessoal</p>
                    <p>Controle seus items</p>
                </div>
            </div>
            <div>
                <ul>
                    <li><a href="/itens">Itens</a></li>
                    <li><a href="/estoque">Estoque</a></li>
                    <li><a href="/unidades">Unidades</a></li>
                </ul>
            </div>
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