import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0b101e] border border-slate-700 rounded-2xl p-6 sm:p-8 text-slate-300 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {type === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>
            <p className="text-xs text-slate-400">
              Matheus Souza · Curso de Micropigmentação Capilar
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          {type === 'terms' ? (
            <>
              <h4 className="font-semibold text-white">1. Objeto e Propriedade Intelectual</h4>
              <p>
                Este treinamento é um produto educacional de capacitação técnica em Micropigmentação Capilar ministrado por Matheus Souza. Todo o conteúdo em vídeo, apostilas e materiais didáticos são protegidos pelas leis de propriedade intelectual. É estritamente proibida a reprodução, redistribuição ou compartilhamento de acessos.
              </p>

              <h4 className="font-semibold text-white">2. Acesso à Plataforma</h4>
              <p>
                O acesso às aulas é pessoal, individual e intransferível. Após a confirmação do pagamento, as credenciais de acesso são enviadas para o endereço de e-mail informado no momento da compra.
              </p>

              <h4 className="font-semibold text-white">3. Responsabilidade Profissional e Prática</h4>
              <p>
                O curso visa capacitar os participantes com técnicas e conhecimentos fundamentais. Os resultados profissionais dependem do estudo individual, da dedicação, do cumprimento rigoroso das normas sanitárias e da regulamentação vigente em cada município/estado para procedimentos estéticos.
              </p>

              <h4 className="font-semibold text-white">4. Garantia Incondicional</h4>
              <p>
                O comprador possui o prazo legal de 7 (sete) dias a contar da disponibilização do acesso para solicitar o cancelamento e reembolso integral do valor pago diretamente pela plataforma de pagamento.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-semibold text-white">1. Coleta de Informações</h4>
              <p>
                Coletamos dados fornecidos voluntariamente por você ao entrar em contato via formulário, WhatsApp ou no momento da inscrição através da plataforma de pagamento parceira (como nome, e-mail e telefone).
              </p>

              <h4 className="font-semibold text-white">2. Finalidade do Tratamento</h4>
              <p>
                As informações coletadas são utilizadas exclusivamente para liberação do acesso ao treinamento, envio de avisos e comunicações sobre as aulas, suporte ao aluno e esclarecimento de dúvidas.
              </p>

              <h4 className="font-semibold text-white">3. Segurança dos Dados</h4>
              <p>
                Adotamos medidas rígidas de segurança digital em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Nunca comercializamos nem compartilhamos seus dados com terceiros para fins publicitários não autorizados.
              </p>

              <h4 className="font-semibold text-white">4. Seus Direitos</h4>
              <p>
                Você pode a qualquer momento solicitar a atualização, confirmação ou exclusão de seus dados de nossa base de contatos entrando em contato com nosso suporte.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
