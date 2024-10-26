import * as m from "@/paraglide/messages";
import { HeaderInternal } from "@/components/HeaderInternal/header-internal";
import { ListCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { QueueDialog } from "@/components/QueueDialog/queue-dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { time } from "console";
import { Input } from "@/components/ui/input";

const peopleInQueue = [
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
  {
    id: "123",
    datetime: new Date(),
    name: "Alan Pazetto",
    phone: "(11) 1234-1234",
    numberofSeats: 4,
    preferencial: true,
    timeInQueue: "40 minutos",
  },
];

export default function FilaDeAtendimento() {
  const hasQueue = true;

  return (
    <div className="w-full max-w-[1280px] flex flex-col">
      <HeaderInternal
        icon={<ListCheck />}
        subtitle={m.queuePageSubtitle()}
        title={m.queuePageTitle()}
      />

      <div className="mt-14 flex flex-col gap-6">
        <h2 className="text-2xl font-medium">Insights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border-[1px] p-3 flex flex-col gap-3">
            <h3 className="text-xl font-medium">Pessoas na fila</h3>
            <p className="text-5xl font-bold truncate">
              {peopleInQueue.length}
            </p>
          </div>
          <div className="rounded-lg border-[1px] p-3 flex flex-col gap-3">
            <h3 className="text-xl font-medium">Tempo médio na fila</h3>
            <p className="text-5xl font-bold truncate">40 min.</p>
          </div>
          <div className="rounded-lg border-[1px] p-3 flex flex-col gap-3">
            <h3 className="text-xl font-medium">Quantos preferenciais</h3>
            <p className="text-5xl font-bold truncate">2 de 7</p>
          </div>
          <div className="rounded-lg border-[1px] p-3 flex flex-col gap-3">
            <h3 className="text-xl font-medium">Maior número de cadeiras</h3>
            <p className="text-5xl font-bold truncate">15 pessoas</p>
          </div>
        </div>
      </div>

      {hasQueue && (
        <div className="mt-14 flex flex-col gap-6">
          <div className="flex ">
            <div className="flex-1">
              <Input placeholder="Buscar por nome..." className="max-w-sm" />
            </div>
            <div>
              <QueueDialog>
                <Button size="lg">{m.queuePageEmptyButton()}</Button>
              </QueueDialog>
            </div>
          </div>
          <div className="flex">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Data e hora</TableHead>
                  <TableHead>Tempo na fila</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Cadeiras</TableHead>
                  <TableHead>Preferencial</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peopleInQueue.map((queue, index) => (
                  <TableRow key={queue.id}>
                    <TableCell className="font-medium">{index}</TableCell>
                    <TableCell className="font-medium">
                      {queue.datetime.toLocaleString()}
                    </TableCell>
                    <TableCell>{queue.timeInQueue}</TableCell>
                    <TableCell>{queue.name}</TableCell>
                    <TableCell>{queue.phone}</TableCell>
                    <TableCell>{queue.numberofSeats}</TableCell>
                    <TableCell>{queue.preferencial ? "Sim" : "Não"}</TableCell>
                    <TableCell className="text-right flex justify-end">
                      <Button variant="ghost">Editar</Button>
                      <Button>Chamar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      )}

      {!hasQueue && (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <Image
            src="/logo.svg"
            width={200}
            height={50}
            alt="Authentication"
            className="block dark:hidden"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">
              {m.queuePageEmptyTitle()}
            </h2>
            <p>{m.queuePageEmptySubtitle()}</p>
          </div>

          <QueueDialog>
            <Button size="lg">{m.queuePageEmptyButton()}</Button>
          </QueueDialog>
        </div>
      )}
    </div>
  );
}
