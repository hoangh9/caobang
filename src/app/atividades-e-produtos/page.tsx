"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AtividadesEProdutos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Cao Bang Tobacco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-marasca relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Atividades e Produtos
          </h1>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-8 text-center text-marasca-dark">
            Atividades
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              A Cao Bang Tobacco atua na produção, beneficiamento e comercialização das variedades de tabaco Virgínia e Burley, baseando-se no cultivo integrado, ou seja, a empresa fornece sementes, agroquímicos, fertilizantes e assistência técnica especializada aos agricultores, para que em contrapartida os mesmos possam produzir o tabaco de acordo com os padrões de qualidade exigidos.
            </p>

            <p className="text-gray-700 mb-6">
              A empresa vem aumentando gradativamente sua participação no mercado, fornecendo tabaco para mais de 40 clientes nos cinco continentes, obedecendo rigorosamente os padrões de qualidade do produto e satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Processing Image Section */}
      <section className="py-12 bg-marasca-light">
        <div className="container-marasca">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/images/products-image.png"
              alt="Processamento de tabaco"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-8 text-center text-marasca-dark">
            Nossos produtos (Virginia e Burley):
          </h2>

          <Tabs defaultValue="laminas" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 bg-gray-100 p-1 mb-8">
              <TabsTrigger
                value="laminas"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                LÂMINAS
              </TabsTrigger>
              <TabsTrigger
                value="fibras"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                FIBRAS
              </TabsTrigger>
              <TabsTrigger
                value="fines"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                FINES
              </TabsTrigger>
              <TabsTrigger
                value="scraps"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                SCRAPS
              </TabsTrigger>
              <TabsTrigger
                value="talos"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                TALOS
              </TabsTrigger>
              <TabsTrigger
                value="cutrag"
                className="data-[state=active]:bg-marasca-orange data-[state=active]:text-white"
              >
                CUT RAG
              </TabsTrigger>
            </TabsList>

            <TabsContent value="laminas" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Lâminas de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Lâminas</h3>
                <p className="text-gray-700">
                  As lâminas são a parte principal da folha de tabaco, após a remoção do talo central. São utilizadas principalmente para a produção de cigarros e outros produtos de tabaco. A qualidade da lâmina é determinada por diversos fatores como cor, textura, aroma e elasticidade.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="fibras" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Fibras de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Fibras</h3>
                <p className="text-gray-700">
                  As fibras são partes do tabaco que passaram por um processo de desfiamento e são utilizadas principalmente na composição de blends específicos para cigarros e outros produtos de tabaco.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="fines" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Fines de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Fines</h3>
                <p className="text-gray-700">
                  Fines são partículas pequenas de tabaco resultantes do processamento das folhas, utilizadas em misturas específicas para a produção de diversos produtos de tabaco.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="scraps" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Scraps de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Scraps</h3>
                <p className="text-gray-700">
                  Scraps são fragmentos de tabaco resultantes do processamento das folhas, com aplicações específicas na indústria de tabaco para determinados tipos de produtos.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="talos" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Talos de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Talos</h3>
                <p className="text-gray-700">
                  Os talos são a nervura central da folha de tabaco, separados durante o processamento. Eles possuem diversas aplicações na indústria, sendo processados para uso em blends específicos.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="cutrag" className="space-y-6">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/products-image.png"
                  alt="Cut Rag de tabaco"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-marasca-orange">Cut Rag</h3>
                <p className="text-gray-700">
                  Cut Rag é o tabaco já cortado e processado, pronto para ser utilizado na produção de cigarros e outros produtos de tabaco. O corte é feito de acordo com especificações precisas para atender aos requisitos de cada cliente.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <h2 className="text-3xl font-bold mb-8 text-center text-marasca-dark">
            Compromisso com a Qualidade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                A Cao Bang Tobacco mantém um rigoroso controle de qualidade em todas as etapas do processo produtivo, desde a seleção de sementes até o produto final entregue aos clientes. Nossa equipe técnica especializada trabalha constantemente para garantir que os mais altos padrões sejam mantidos.
              </p>
              <p className="text-gray-700">
                A empresa investe continuamente em tecnologia e treinamento para assegurar que nossos produtos atendam às expectativas do mercado internacional, respeitando todas as normas e regulamentações aplicáveis ao setor.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/about-image.jpg"
                alt="Controle de qualidade Cao Bang Tobacco"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
