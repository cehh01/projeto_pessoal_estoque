<script setup>

    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column'
    import Actions from './Actions.vue'

    import { ref } from 'vue'

</script>

<template>
    <div>
        <button type="button" class="btn btn-primary" @click="adicionarItem">Adicionar Item</button>
    </div>
    <DataTable :value="items" showGridlines>
        <Column field="name" header="Name" />
        <Column field="unit" header="Unit" />
        <Column field="quantity" header="Quantity" />
        <Column field="minimum" header="Minimum" />
        <Column header="Actions">
            <template #body="{ data }">
                <Actions
                :item="data"
                @edit="editarItem"
                @delete="excluirItem"
                />
            </template>
        </Column>
    </DataTable>
</template>