io.write("Digite a quantidade de elementos: ")
local qnt = tonumber(io.read())
local tabela = {}
for i = 1, qnt do
    io.write("Digite o elemento" .. i .. ": ")
    tabela[i] = tonumber(io.read())
end
io.write("Digite o número a buscar: ")
local num = tonumber(io.read())
function contarOcorrencias(tabela, alvo)
    local cont = 0
    for i = 1, #tabela do
        if tabela[i] == alvo then
            cont = cont + 1
        end
    end
    return cont
end

local o = contarOcorrencias(tabela, num)
print( num .. " aparece " .. o .. " vezes")