"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  message: z.string().min(10, { message: "메시지를 10자 이상 입력해주세요." }),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { supabase } = await import('../lib/supabaseClient');
      const { error } = await supabase
        .from('contacts')
        .insert([
          { name: values.name, email: values.email, message: values.message },
        ]);
      
      if (error) throw error;
      
      toast({
        title: "메시지 전송 완료",
        description: "곧 연락드리겠습니다. 감사합니다!",
      });
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "오류",
        description: "메시지 전송에 실패했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">문의하기</h2>
          <p className="text-muted-foreground mb-8">
            AIon에 대해 궁금한 점이 있으신가요? 메시지를 남겨주시면 곧 연락드리겠습니다.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="이름을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder="이메일을 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>메시지</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="메시지를 입력해주세요"
                        className="h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "전송 중..." : "메시지 보내기"}
              </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
