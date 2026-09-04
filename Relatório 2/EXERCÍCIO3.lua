io.write("Digite a quantidade de elementos: ")
local qnt = tonumber(io.read())
local tabela = {}
for i = 1, qnt do
    io.write("Digite o elemento" .. i .. ": ")
    tabela[i] = tonumber(io.read())
end
io.write("Digite o limite: ")
local num = tonumber(io.read())
function filtrar(tabela, limite)
    local nova = {}
    local cont = 0
    for i = 1, #tabela do
        if tabela[i] > limite then
            cont = cont + 1
            nova[cont] = tabela[i]
        end
    end
    return nova
end

local resultado = filtrar(tabela, num)
for i = 1, #resultado do
    print(resultado[i])
end