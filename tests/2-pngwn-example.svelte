{#each array.map(({a, b, c}) => ({ a: a+1, b, c})) as {a, b, c} }
    {name === undefined ? 'Anybody' : name}
{/each}