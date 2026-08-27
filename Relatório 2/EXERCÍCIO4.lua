function Media(a, b)
    return (a + b) / 2
end

function Maior(a, b)
    if a > b then
        return a
    else
        return b
    end
end

function Diferenca(a, b)
    if a > b then
        return a - b
    else
        return b - a
    end
end

function analisar(n1, n2, op)
    if op == "media" then
        return Media(n1, n2)
    elseif op == "maior" then
        return Maior(n1, n2)
    elseif op == "diferenca" then
        return Diferenca(n1, n2)
    else
        return "Erro!"
    end
end

io.write("Digite o elemento 1: ")
local num1 = tonumber(io.read())

io.write("Digite o elemento 2: ")
local num2 = tonumber(io.read())

io.write("Digite a operação: ")
local op = io.read()

local resultado = analisarNumeros(num, num2, op)
print(resultado)