"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Facebook, Linkedin } from 'lucide-react';

export default function Contato() {
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
            Contato
          </h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-marasca">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-marasca-dark">
                Contatos
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p>+55 (51) 3793-1200</p>
                <p>+55 (51) 3793-1227</p>
                <p>contato@tabacosmarasca.com.br</p>
                <p>www.tabacosmarasca.com.br</p>
              </div>

              <div className="flex gap-4 mb-8">
                <Link
                  href="https://www.linkedin.com/company/tabacos-marasca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Linkedin size={24} className="text-marasca-dark" />
                </Link>
                <Link
                  href="https://www.facebook.com/pages/Tabacos%20Marasca/303796609750209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook size={24} className="text-marasca-dark" />
                </Link>
              </div>

              <h3 className="text-xl font-bold mb-4 text-marasca-dark">
                Endereço
              </h3>
              <address className="not-italic text-gray-700 mb-8">
                <p>RSC 287, Km 79, No. 5001 Linha Estrela</p>
                <p>Venâncio Aires | RS | Brasil</p>
                <p>CEP: 95800-000</p>
              </address>

              {/* Map (placeholder - would be an iframe in real implementation) */}
              <div className="relative h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Map would be displayed here
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-marasca-dark">
                Entre em contato com o setor desejado através do formulário abaixo
              </h2>

              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Assunto"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full p-3 rounded-md">
                      <SelectValue placeholder="Setor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="rh">Recursos Humanos</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder="Mensagem"
                    className="w-full p-3 rounded-md min-h-[150px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="consent" className="w-4 h-4" />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    Aceito compartilhar as informações contidas nesse formulário com a Cao Bang Tobacco.
                  </label>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-marasca-orange hover:bg-marasca-orange/90 py-3"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Address Banner */}
      <section className="py-6 bg-marasca-orange text-white">
        <div className="container-marasca text-center">
          <p>
            RSC 287, Km 79, No. 5001 Linha Estrela – Venâncio Aires RS | Brasil | CEP: 95800-000
          </p>
        </div>
      </section>
    </div>
  );
}
