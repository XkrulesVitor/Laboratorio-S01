io.write("Digite o primeiro expoente: ")
local n1 = tonumber(io.read())

io.write("Digite o ultimo expoente: ")
local n2 = tonumber(io.read())

io.write("Digite o valor da base: ")
local b= tonumber(io.read())

function gerarTabelaPotencias(inicio, final, b)
    for e = inicio, final do
        local r = b ^ e
        print(b .. "^" .. e .. " = " .. r)
    end
end
gerarTabelaPotencias(n1, n2, b)