"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Mock news data with more items
const newsItems = [
  {
    id: 1,
    title: '25 DE ABRIL-Profissional da contabilidade',
    excerpt: 'No dia de hoje, 25 de abril, a Cao Bang Tobacco presta homenagem aos profissionais da contabilidade, que não medem esforços para garantir a integridade das informações financeiras e contábeis e que transformam os números em informações valiosas.',
    date: '25 de abril de 2025',
    image: '/images/news1.jpeg',
    slug: '/noticias/dia-do-profissional-contabilidade'
  },
  {
    id: 2,
    title: '22 de abril – MOACIR MARASCA',
    excerpt: 'Hoje é um dia muito especial, pois no dia 22 de abril celebramos não apenas a passagem de mais um ano na vida do Sr. Moacir Marasca, mas também a oportunidade de reconhecer e valorizar toda a sua dedicação, empenho e liderança a frente da empresa.',
    date: '22 de abril de 2025',
    image: '/images/about-image.jpg',
    slug: '/noticias/moacir-marasca'
  },
  {
    id: 3,
    title: '21 de abril – Tiradentes',
    excerpt: 'O dia de Tiradentes, celebrado em 21 de abril é uma homenagem à Joaquim José da Silva Xavier; aclamado herói nacional. Tiradentes foi enforcado nesta data no ano de 1792 por lutar pela Independência do Brasil.',
    date: '21 de abril de 2025',
    image: '/images/news2.jpeg',
    slug: '/noticias/tiradentes'
  },
  {
    id: 4,
    title: 'Páscoa',
    excerpt: 'Nesta Páscoa, que o amor e a união estejam presentes em cada momento especial. A Cao Bang Tobacco deseja à todos um abençoado domingo.',
    date: '20 de abril de 2025',
    image: '/images/news1.jpeg',
    slug: '/noticias/pascoa'
  },
  {
    id: 5,
    title: '18 de abril – Sexta Feira Santa',
    excerpt: 'Que esta Sexta-feira Santa seja de reflexão das nossas ações e que o amor incondicional de Deus sirva sempre como inspiração para as nossas vidas. A Cao Bang Tobacco deseja à todos um ótimo feriado.',
    date: '18 de abril de 2025',
    image: '/images/news2.jpeg',
    slug: '/noticias/sexta-feira-santa'
  },
  {
    id: 6,
    title: '15 de abril – Dia Nacional da Preservação do Solo',
    excerpt: 'No dia Nacional da Preservação do Solo, enaltecemos a importância da conservação e do manejo consciente deste recurso natural, essencial à vida e a produção agrícola.',
    date: '15 de abril de 2025',
    image: '/images/hero-background.jpg',
    slug: '/noticias/dia-nacional-preservacao-solo'
  },
];

export default function Noticias() {
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
            Notícias
          </h1>
        </div>
      </section>

      {/* News Listing */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-md">
                <CardHeader className="p-0">
                  <div className="relative h-60">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-marasca-orange text-white py-1 px-3">
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-marasca-dark">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={item.slug}
                    className="text-marasca-orange font-medium flex items-center hover:underline"
                  >
                    Leia mais <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button className="bg-marasca-orange hover:bg-marasca-orange/90" disabled>
              1
            </Button>
            <Button variant="outline">
              2
            </Button>
            <Button variant="outline">
              3
            </Button>
            <Button variant="outline">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-marasca-light">
        <div className="container-marasca">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-marasca-dark">
              Receba nossas notícias
            </h2>
            <p className="text-gray-700 mb-8">
              Cadastre-se para receber nossas notícias e atualizações sobre a Cao Bang Tobacco e o mercado de tabaco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-md border border-gray-300 min-w-[300px]"
              />
              <Button className="bg-marasca-orange hover:bg-marasca-orange/90">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
