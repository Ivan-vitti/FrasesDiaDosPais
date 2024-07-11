import { StyleSheet } from "react-native";

// Definindo as cores
export const colors = {
    primary: '#3498DB',        // Azul Claro (botões principais, destaques)
    secondary: '#2C3E50',      // Azul Marinho (botões secundários)
    background: '#E6F7FF',     // Azul Muito Claro (fundo)
    textPrimary: '#1a2733',    // Azul Marinho (texto principal)
    textSecondary: '#3498DB',  // Azul Claro (texto secundário)
    divider: '#BDBDBD',        // Cinza Claro (divisórias)
    accent: '#3498DB',         // Azul Claro (destaques)
    error: '#F44336',          // Vermelho (mensagens de erro)
    success: '#4CAF50',        // Verde (mensagens de sucesso)
    link: '#3498DB',           // Azul Claro (links)
    iconActive: '#3498DB',     // Cor para ícones ativos
    iconInactive: '#757575'    // Cor para ícones inativos
};

// Definindo os estilos globais
export const Styles = StyleSheet.create({


    // Estilos para títulos principais
    title: {
        fontSize: 26,                        // Tamanho da fonte
        textAlign: 'center',                 // Alinhamento do texto
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        marginVertical: 15,                  // Margem vertical
        marginBottom: 10,                    // Margem inferior para espaçamento da base
        marginTop: 15,                       // Margem superior para espaçamento do topo
    },

    // Estilos para subtítulos
    subtitle: {
        fontSize: 20,                        // Tamanho da fonte
        textAlign: 'center',
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        fontFamily: 'Arial, sans-serif',     // Fonte
        marginHorizontal: 15,                // Margem vertical
        marginTop: 10,                       // Margem superior para espaçamento do topo

    },

    // Estilos para texto regular
    text: {
        fontSize: 16,                    // Tamanho da fonte
        textAlign: 'justify',
        marginHorizontal: 20,            // Margem horizontal para espaçamento dos lados
        lineHeight: 22,                  // Altura da linha
        color: colors.textPrimary,       // Cor do texto
        marginBottom: 15,                    // Margem inferior para espaçamento da base

    },

    // Estilos para legenda
    legend: {
        fontSize: 14,                        // Tamanho da fonte
        fontWeight: 'normal',                // Peso da fonte
        textAlign: 'center',                 // Alinhamento do texto
        color: colors.textPrimary,       // Cor do texto

    },

    // Estilos para botões secundários
    buttonSecondary: {
        backgroundColor: colors.secondary,   // Cor de fundo do botão
        color: '#FFFFFF',                    // Cor do texto do botão (mantida como branca para contraste)
        paddingVertical: 15,                 // Espaçamento vertical interno
        paddingHorizontal: 20,               // Espaçamento horizontal interno
        borderRadius: 15,                    // Raio da borda
        cursor: 'pointer',                   // Cursor do mouse
        borderWidth: 1,                      // Largura da borda
        borderColor: colors.secondary,       // Cor da borda
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
    },

    // Estilos para texto dentro dos botões secundários
    buttonTextSecondary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 18,                        // Tamanho da fonte
        marginLeft: 20,                      // Espaçamento à esquerda da imagem
    },

    // Estilos para imagem
    ImagePremium: {
        width: 33,                           // Largura da imagem
        height: 33,                          // Altura da imagem
        marginTop: 5,                   // Margem superior para espaçamento do topo
            
    },

    // Novo estilo para A imagem ficar na frente da fraze
    premiumContainer: {
        flexDirection: 'row',   // Direção dos itens na linha
        marginLeft: 30,
        marginRight: 40,
        marginBottom: 20,
    },

});

export default Styles;
